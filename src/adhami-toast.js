const elementHTML = `
<div class="card" part="popup">
<div class="icon"><slot name="icon"></div>
<div>
<div><slot name="title"></slot></div>
<div><slot name="description"></slot></div>
</div>
<button class="close" part="close">X</button>
</div>`

import { shadowCSS } from './shadowDomCSS.js';

class AdhamiToast extends HTMLElement {
    #opened = "false";
    #duration = "100000";

    get opened() {return this.#opened}
    set opened(v) {
        v = v.toString();
        this.#opened = v;
        this.setAttribute("opened", v);
    }

    get duration() {return this.#duration}
    set duration(v) {
        v = v.toString();
        this.#duration = v;
        this.setAttribute("duration", v);
    }

    open() {
        this.opened = "true";
    }
    
    static get observedAttributes() {
        return ["opened", "duration"];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "opened"){
            newValue = newValue.toString();
            if(newValue === "false") this.shadowRoot.querySelector(".card").classList.add("hidden");
            else this.shadowRoot.querySelector(".card").classList.remove("hidden");
            this.#opened = newValue;
        }
        if(name === "duration") {
            newValue = Number.parseFloat(newValue.toString());
            let self = this;
            setTimeout(()=>self.close(), newValue*1000);
            this.#duration = newValue;
        }
        this.#render();
    }
    
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<style>${shadowCSS}</style>`+elementHTML;
        this.openEvent = new CustomEvent("open", {
            bubbles: true,
            cancelable: true,
        });
        this.closeEvent = new CustomEvent("close", {
            bubbles: true,
            cancelable: true,
        });
    }

    close() {
        this.dispatchEvent(this.closeEvent);
        this.opened = "false";
    }
    
    handleClick(event) {
        if(event.path[0].matches(".close")) this.close();
        else this.dispatchEvent(this.openEvent);
    }
    
    connectedCallback() {
        this.#render();
        this.addEventListener('click', event => this.handleClick(event));
	}

    #render () {

    }
}

customElements.define("adhami-toast", AdhamiToast);
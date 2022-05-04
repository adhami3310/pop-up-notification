document.querySelectorAll(".live").forEach(live => live.addEventListener("click", (event)=>{
    let notif = event.target.parentElement.querySelector("template");
    document.body.appendChild(notif.content.cloneNode(true));
}));

document.querySelectorAll(".live").forEach(live => {
    let notif = live.parentElement.querySelector("template");
    let code = live.parentElement.querySelector("code");
    code.innerText = notif.innerHTML;
});

script1.addEventListener("click", (event)=>{
    document.querySelector("#jspop").open();
});
export const shadowCSS = `
.card.hidden {
    display: none;
}

.card{
    background: #ddd;   
    position: fixed;
    bottom: 0.5em;
    right: 0.5em;
    padding: 0.3em;
    font-size: 1.5em;
    border-radius: 0.3em;
    display: flex;
    animation: appear 200ms;
    gap: 0.3em;
    border: 2px solid blue;
}

.close {
    appearance: none;
    background: red;
    border: none;
    color: white;
    width: 1em;
    height: 1em;
    font-size: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.2em;    
    cursor: pointer;
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.icon {
    height: 3em;
}

.icon img {
    height: -webkit-fill-available;
}
`

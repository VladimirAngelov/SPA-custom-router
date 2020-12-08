import {router} from "./routing.js";

window.onload = () => {
    const path = window.location.pathname.split('/')[1];

    if (window.location.pathname === '/') {
        router('first')
        history.pushState({id: 'first'}, '', '/first')
    } else {
        router(path)
    }
}

document.getElementById('app')
    .addEventListener('click', function handler(e) {
        e.preventDefault();

        if (e.target.tagName === 'BUTTON') {
            console.log(e.target)
            const path = e.target.parentElement.href.split('/').slice(-1)[0];
            console.log(path)
            history.pushState({id: path}, '', '/' + path)
            router(path)
        }
    })
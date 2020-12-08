import {templates} from "./templates.js";

export const router = (path) => {
    const routes = {
        'first': templates.first,
        'second': templates.second,
        'third': templates.third
    };

    if (path === '/' || !routes.hasOwnProperty(path)) {
        path = 'first';
    }

    const app = document.getElementById('app');

    app.innerHTML = routes[path]
}

window.addEventListener('popstate', function () {
    const stateId = history.state.id;

    if (stateId) {
        router(stateId)
    } else {
        router('first')
    }
})
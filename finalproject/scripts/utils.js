export function createElement(tag, className, innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

export function saveLastClickedPizza(pizzaName) {
    localStorage.setItem('lastClickedPizza', pizzaName);
}

export function getLastClickedPizza() {
    return localStorage.getItem('lastClickedPizza');
}

import "./scss/index.scss";

let container = document.querySelector(".container");

container.addEventListener('click', () => {
    container.innerHTML = "Hello World!";
})
const id = (name) => document.getElementById(name);
const cls = (selector) => document.querySelector(selector);
const clss = (selector) => document.querySelectorAll(selector);

let logo = id("logo");

logo.addEventListener("click", () => {
    window.location.href = "/building-company/index.html";
})
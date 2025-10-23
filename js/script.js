const id = (name) => document.getElementById(name);

let logo = id("logo");

logo.addEventListener("click", () => {
    window.location.href = "/building-company/index.html";
})
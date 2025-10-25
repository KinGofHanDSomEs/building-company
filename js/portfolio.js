const cls = (selector) => document.querySelector(selector);

let legend = cls(".legend");

let select = cls(".select");

function toggleClassOpened() {
    select.classList.toggle("opened");
    legend.lastElementChild.classList.toggle("opened");
}

function removeClassOpened() {
    select.classList.remove("opened");
    legend.lastElementChild.classList.remove("opened");
}

document.body.addEventListener("click", () => {
    removeClassOpened();
})

legend.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleClassOpened();
});

for (const option of select.childNodes) {
    option.addEventListener("click", () => {
        legend.firstElementChild.innerHTML = option.textContent;
        removeClassOpened();
    });
}


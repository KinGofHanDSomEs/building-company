{
    const subMenuTitles = [...clss(".sub-menu h3")];
    const menus = [...clss(".menu")];
    const subSubMenus = [...clss(".sub-sub-menu")];
    const selectService = id("service");
    const requestBtn = id("request-button");

    menus.forEach((menu) => {
        menu.firstElementChild.addEventListener("click", () => {
            menu.lastElementChild.classList.toggle("active");
            menu.firstElementChild.firstElementChild.classList.toggle("active");
        })
    })

    for (let i = 0; i < subMenuTitles.length; i++) {
        subSubMenus[i].style.left = subMenuTitles[i].offsetWidth + 55 + "px";
        subMenuTitles[i].addEventListener("click", () => {
            selectService.value = subMenuTitles[i].getAttribute("value");
            window.location.href = "/building-company/pages/services.html#service";
        })
    }

    requestBtn.addEventListener("click", (e) => {
        e.preventDefault();
    })
}
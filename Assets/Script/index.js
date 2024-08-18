"use strict";
// constantes------------------------
const exibeNavBar = `exibeNavBar`;
const darkTheme = `dark-theme`;
//referencia de elementos DOM------------------------
const menuHamburguer = document.querySelector(".hamburger");
const menuHamburguerInput = document.querySelector("#input-hamburguer");
const navBar = document.querySelector(".navbar");
const switchThemeInput = document.querySelector("#switch");
switchThemeInput ? (switchThemeInput.checked = true) : null;
//lógica do menu hamburguer
if (menuHamburguer && menuHamburguerInput && navBar) {
    menuHamburguer.addEventListener("click", (e) => {
        e.preventDefault();
        menuHamburguerInput.checked = !menuHamburguerInput.checked;
        navBar.classList.toggle(exibeNavBar);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const labelSwitchTheme = document.querySelector(".switch");
    labelSwitchTheme?.addEventListener("change", () => {
        // menuHamburguerInput!.checked = false;
        // navBar?.classList.remove(exibeNavBar);
        document.body.classList.toggle(darkTheme);
    });
});

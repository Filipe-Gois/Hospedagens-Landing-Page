// constantes------------------------
const exibeNavBar = `exibeNavBar`;
const darkTheme = `dark-theme`;

//referencia de elementos DOM------------------------
const menuHamburguer = document.querySelector<HTMLLabelElement>(".hamburger");
const menuHamburguerInput =
  document.querySelector<HTMLInputElement>("#input-hamburguer");
const navBar = document.querySelector<HTMLElement>(".navbar");

const switchThemeInput = document.querySelector<HTMLInputElement>("#switch");
switchThemeInput ? (switchThemeInput.checked = true) : null;

//lógica do menu hamburguer
if (menuHamburguer && menuHamburguerInput && navBar) {
  menuHamburguer.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    menuHamburguerInput.checked = !menuHamburguerInput.checked;
    navBar.classList.toggle(exibeNavBar);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const labelSwitchTheme = document.querySelector<HTMLLabelElement>(".switch");

  labelSwitchTheme?.addEventListener("change", () => {
    // menuHamburguerInput!.checked = false;
    // navBar?.classList.remove(exibeNavBar);
    document.body.classList.toggle(darkTheme);
  });
});

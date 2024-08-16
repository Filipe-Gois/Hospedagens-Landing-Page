"use strict";

const menuHamburguer = document.querySelector(".hamburger");

const menuHamburguerInput = document.querySelector("#input-hamburguer");

const navBar = document.querySelector(".navbar");

menuHamburguer.addEventListener("click", (e) => {
  e.preventDefault();
  menuHamburguerInput.checked = !menuHamburguerInput.checked;
  navBar.classList.toggle("exibeNavBar");
});

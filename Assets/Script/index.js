"use strict";
// constantes e tipagens------------------------
const exibeNavBar = `exibeNavBar`;
const darkTheme = `dark-theme`;
const locations = [
  {
    titulo: "Angra dos reis",
    descricao:
      "Desfrute de um paraíso tropical em nossa pousada! Relaxe em nossas piscinas com vista para o mar.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Arraial do cabo",
    descricao:
      "Conecte-se com a natureza em Arraial do Cabo! Nossa pousada está localizada próximo às praias.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Treze Tílias",
    descricao:
      "Viva a experiência de um vilarejo europeu no Brasil! Nossa pousada em Treze Tílias é perfeita.",
    local: "SC",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Ipanema",
    descricao:
      "Explore a rica cultura e história de Ipanema! Nossa pousada é o ponto de partida ideal para conhecer.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Angra dos reis",
    descricao:
      "Desfrute de um paraíso tropical em nossa pousada! Relaxe em nossas piscinas com vista para o mar.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Arraial do cabo",
    descricao:
      "Conecte-se com a natureza em Arraial do Cabo! Nossa pousada está localizada próximo às praias.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Treze Tílias",
    descricao:
      "Viva a experiência de um vilarejo europeu no Brasil! Nossa pousada em Treze Tílias é perfeita.",
    local: "SC",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
  {
    titulo: "Ipanema",
    descricao:
      "Explore a rica cultura e história de Ipanema! Nossa pousada é o ponto de partida ideal para conhecer.",
    local: "RJ",
    imagem: {
      uri: "/Assets/Images/praia.jpg",
      descricao: "Imagem de praia.",
    },
  },
];
//referencia de elementos DOM------------------------
const menuHamburguer = document.querySelector(".hamburger");
const menuHamburguerInput = document.querySelector("#input-hamburguer");
const navBar = document.querySelector(".navbar");
const switchThemeInput = document.querySelector("#switch");
switchThemeInput ? (switchThemeInput.checked = true) : null;
const divViagens = document.querySelector(".content-section-viagens");
//lógica do menu hamburguer
if (menuHamburguer && menuHamburguerInput && navBar) {
  menuHamburguer.addEventListener("click", (e) => {
    e.preventDefault();
    menuHamburguerInput.checked = !menuHamburguerInput.checked;
    navBar.classList.toggle(exibeNavBar);
  });
}
//lógica alternar entre light e dark theme
document.addEventListener("DOMContentLoaded", () => {
  const labelSwitchTheme = document.querySelector(".switch");
  labelSwitchTheme?.addEventListener("change", () => {
    // menuHamburguerInput!.checked = false;
    // navBar?.classList.remove(exibeNavBar);
    document.body.classList.toggle(darkTheme);
  });
});
//criando os articles de viagem dinamicamente :)
if (divViagens) {
  locations.map((local) => {
    //criando os elementos no html
    const articleViagem = document.createElement("article");
    const imagemViagem = document.createElement("img");
    const divViagemContent = document.createElement("div");
    const divViagemTitleBox = document.createElement("div");
    const paragrafoTituloViagem = document.createElement("p");
    const paragrafoLocalViagem = document.createElement("p");
    const paragrafoDescricaoViagem = document.createElement("p");
    //definindo atributos dos elementos
    articleViagem.className = "article-viagens";
    imagemViagem.className = `imagem-viagem`;
    divViagemContent.className = `viagem-content`;
    divViagemTitleBox.className = `viagem-title-box`;
    paragrafoTituloViagem.className = `titulo-viagem`;
    paragrafoLocalViagem.className = `local-viagem`;
    paragrafoDescricaoViagem.className = `descricao-viagem`;
    //definindo valores dos elementos
    imagemViagem.src = local.imagem.uri;
    imagemViagem.alt = local.imagem.descricao;
    paragrafoTituloViagem.innerText = local.titulo;
    paragrafoLocalViagem.innerText = local.local;
    paragrafoDescricaoViagem.innerText = local.descricao;
    //anexando cada elemento ao seu respectivo pai
    divViagens.appendChild(articleViagem);
    articleViagem.appendChild(imagemViagem);
    articleViagem.appendChild(divViagemContent);
    divViagemContent.appendChild(divViagemTitleBox);
    divViagemTitleBox.appendChild(paragrafoTituloViagem);
    divViagemTitleBox.appendChild(paragrafoLocalViagem);
    divViagemContent.appendChild(paragrafoDescricaoViagem);
  });
}

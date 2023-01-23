// Selecionando todos os elementos li e o botão
const lis = document.querySelectorAll("li");
const button = document.querySelector(".btn");
const main = document.querySelector(".main-container");
const secondMain = document.querySelector(".second-container");
let rating = document.querySelector(".rating");
// Variáveis para armazenar o li atualmente selecionado e o conteúdo do li selecionado
let currentLi = null;
let selectedLiContent;

// Adicionando um evento de clique para cada li
lis.forEach((li) => {
  li.addEventListener("click", handleLiClick);
});

// Função para lidar com o clique em um li
function handleLiClick() {
  // Removendo a classe "toogle-button" do li anteriormente selecionado
  if (currentLi) {
    currentLi.classList.remove("toogle-button");
  }

  // Adicionando a classe "toogle-button" ao li atualmente clicado
  this.classList.add("toogle-button");

  // Atualizando o li atualmente selecionado
  currentLi = this;

  // Armazenando o conteúdo do li selecionado
  selectedLiContent = this.textContent;
  rating.innerHTML = `You selected ${selectedLiContent} out of 5`;
}

// Adicionando um evento de clique ao botão
button.addEventListener("click", handleButtonClick);

// Função para lidar com o clique no botão
function handleButtonClick() {
  if (selectedLiContent) {
    main.classList.add("hidden");
    secondMain.classList.remove("hidden");
  } else {
    alert("selecione um numero,por gentileza!");
  }
}

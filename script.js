const headerBtn = document.querySelectorAll(".header-btn");
const activeColor = document.querySelector(".active-color");

function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circulo = document.querySelector(".circulo");
  circulo.style.background = color;
}
function textColor(color) {
  const circulo = document.querySelector("span");
  circulo.style.color = color;
}
function buttonColor(color) {
  const circulo = document.querySelector(".textoPrincipal");
  circulo.style.background = color;
}
function listColor(color) {
  const circle = document.querySelector("header ul li a:hover");
  header.style.background = color;
}
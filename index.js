const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const modo = document.querySelector('.mod');
const container = document.querySelector('.container');
const containerSer = document.querySelector('.containerSer');
const containerLogin = document.querySelector('.containerLogin');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('nav-active');
});

modo.addEventListener('click', () => {
  nav.classList.toggle('nav-oscuro');
  container.classList.toggle('container-oscuro');
  containerSer.classList.toggle('containerSer-oscuro');
  containerLogin.classList.toggle('containerLogin-oscuro');
});

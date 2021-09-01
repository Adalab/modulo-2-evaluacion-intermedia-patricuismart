'use strict';

//Declaración de variables
const userNumber = document.querySelector('.js_number');
const tryButon = document.querySelector('.js_buton');
const userClue = document.querySelector('.js_clue');
const counter = document.querySelector('.js_counter');

//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const number = getRandomNumber(100);
console.log(number);

function hadleClickTryButon() {
  console.log('has hecho click');
}
//Eventos
tryButon.addEventListener('click', hadleClickTryButon);

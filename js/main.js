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
console.log(`El número aleatorio es ${number}`);

function hadleClickTryButon() {
  const inputNumber = parseInt(userNumber.value);
  console.log(inputNumber);
  //userMessage();
  //tryCounter();
}
//Eventos
tryButon.addEventListener('click', hadleClickTryButon);

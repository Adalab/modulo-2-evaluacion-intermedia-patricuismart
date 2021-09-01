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

function userMessage() {
  const inputNumber = parseInt(userNumber.value);
  console.log(inputNumber);
  if (inputNumber < 1 || inputNumber > 100) {
    userClue.value = 'El número debe estar entre 1 y 100.';
  } else if (inputNumber > number) {
    userClue.value = 'Demasiado alto.';
  } else if (inputNumber < number) {
    userClue.value = 'Demasiado bajo.';
  } else if (inputNumber === number) {
    userClue.value = 'Has ganado campeona!!!';
  }
}

function hadleClickTryButon() {
  userMessage();
  //tryCounter();
}
//Eventos
tryButon.addEventListener('click', hadleClickTryButon);

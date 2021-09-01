'use strict';

//Declaración de variables
const userNumber = document.querySelector('.js_number');
const tryButon = document.querySelector('.js_buton');
const clueInput = document.querySelector('.js_clue');
const counterInput = document.querySelector('.js_counter');
let counter = 0;

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
    clueInput.value = 'El número debe estar entre 1 y 100.';
  } else if (inputNumber > number) {
    clueInput.value = 'Demasiado alto.';
  } else if (inputNumber < number) {
    clueInput.value = 'Demasiado bajo.';
  } else if (inputNumber === number) {
    clueInput.value = 'Has ganado campeona!!!';
  }
}

function tryCounter() {
  ++counter;
  counterInput.value = `Número de intentos: ${counter}`;
}
function hadleClickTryButon() {
  userMessage();
  tryCounter();
}
//Eventos
tryButon.addEventListener('click', hadleClickTryButon);

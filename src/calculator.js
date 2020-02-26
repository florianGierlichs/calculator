"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__input__result");
const calculatorClear = document.querySelector(".clear");

///////
const add = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};
const subtract = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
};
const divide = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
};
const multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};
///////

const numberOne = Number(calculatorInput[6].innerText);
const numberTwo = Number(calculatorInput[2].innerText);

function handleClick() {
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log("clicked");
}

calculatorResult.addEventListener("click", handleClick);

function erase() {
  calculatorOutput.value = "";
  console.log("C clicked");
}

calculatorClear.addEventListener("click", erase);

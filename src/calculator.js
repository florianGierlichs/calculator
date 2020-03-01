import { calculate } from "./math.js";
import { addElement } from "./newElements.js";

// const declarations
const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__inputs");
const calculatorResult = document.querySelector(".calculator__input__result");
const calculatorClear = document.querySelector(".clear");
const calculatorOperators = document.querySelectorAll(
  ".calculator__input__spec"
);

let numberOne = "";
let numberTwo = "";
let operator = "";

const randomizeShit = () => {
  //do work
  const listInputs = document.querySelectorAll(".calculator__inputs");
  const listSpec = document.querySelectorAll(".calculator__input__spec");
  const listTotal = [...listInputs, ...listSpec]; // new Array()

  const equalSign = document.querySelector(".calculator__input__result");

  equalSign.style.left;

  listTotal.forEach(item => {
    const randNum = Math.floor(Math.random() * (1000 - 700 + 1) + 700);

    const moreRandom = Math.random();

    if (moreRandom > 0.5) {
      item.style.left = `${randNum}px`;
    } else {
      item.style.left = `-${randNum}px`;
    }

    item.style.top = `-${randNum}px`;
  });
};

document.addEventListener("DOMContentLoaded", randomizeShit);

// functions
function erase() {
  calculatorOutput.value = "";
}
calculatorClear.addEventListener("click", erase);

//
calculatorInputs.forEach(callInput => {
  callInput.addEventListener("click", () => {
    calculatorOutput.value += callInput.innerText;
  });
});
//

const operatorEventListener = operatorClicked => {
  const saveFirstInputValue = () => {
    numberOne = Number(calculatorOutput.value);
    addElement(numberOne);
    operator = operatorClicked.innerText;
    erase();
    addElement(operator);
  };
  operatorClicked.addEventListener("click", saveFirstInputValue);
};

calculatorOperators.forEach(operatorEventListener);

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  addElement(numberTwo);
  addElement("=");
  calculatorOutput.value = calculate(numberOne, numberTwo, operator);
  addElement(calculatorOutput.value);
}
calculatorResult.addEventListener("click", handleResultClick);

const magic = document.querySelector(".magicBtn");


//

const inputsMagic = className => {
  const allInputs = document.querySelectorAll(className);

  const handleActive = item => {
    return item.classList.toggle("active");
  };

  return allInputs.forEach(handleActive);
};

const doTheMagic = () => {
  document.querySelector(".calculator__wrapper").classList.toggle("calcActive");
  document.querySelector(".clear").classList.toggle("active");
  document.querySelector(".calculator").classList.toggle("calcActive");
  document
    .querySelector(".calculator__input__result")
    .classList.toggle("active");

  // Select all inputs and add active
  inputsMagic(".calculator__inputs");
  // select all input specs and add active
  inputsMagic(".calculator__input__spec");

  randomizeShit();
  return;
};

const doTheMagic = () => {
  document.querySelector(".calculator__wrapper").classList.toggle("active");
};

magic.addEventListener("click", doTheMagic);

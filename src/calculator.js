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
//
// function handleResultClick() {
//   numberTwo = Number(calculatorOutput.value);
//   calculatorOutput.value = addition(numberOne, numberTwo);
// }
// calculatorResult.addEventListener("click", handleResultClick);

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  addElement(numberTwo);
  addElement("=");
  calculatorOutput.value = calculate(numberOne, numberTwo, operator);
  addElement(calculatorOutput.value);
}
calculatorResult.addEventListener("click", handleResultClick);

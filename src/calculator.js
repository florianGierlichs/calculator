import { calculate } from "./math.js";

// const declarations
const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__inputs");
const calculatorResult = document.querySelector(".calculator__input__result");
const calculatorClear = document.querySelector(".clear");
const calculatorOperators = document.querySelectorAll(
  ".calculator__input__spec"
);

let numberOne = 0;
let numberTwo = 0;
let operator = "";

// functions
function erase() {
  calculatorOutput.value = "";
}
calculatorClear.addEventListener("click", erase);
//
calculatorInputs.forEach(callInput => {
  callInput.addEventListener(
    "click",
    () => (calculatorOutput.value += callInput.innerText)
  );
});
//

const operatorEventListener = operatorClicked => {
  const saveFirstInputValue = () => {
    numberOne = Number(calculatorOutput.value);
    operator = operatorClicked.innerText;
    erase();
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
  calculatorOutput.value = calculate(numberOne, numberTwo, operator);
}
calculatorResult.addEventListener("click", handleResultClick);

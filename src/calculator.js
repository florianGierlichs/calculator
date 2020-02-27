import { addition } from "./math.js";

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
    // const setOutputToOperator = () => {
    //   calculatorOutput.value = "first value saved";
    // };
    // setOutputToOperator();
    // alert("First input saved!");
    // erase();
    calculatorOperators.forEach(callInput => {
      callInput.addEventListener(
        "click",
        () => (calculatorOutput.value = callInput.innerText)
      );
    });
    erase();
  };
  operatorClicked.addEventListener("click", saveFirstInputValue);
};

calculatorOperators.forEach(operatorEventListener);
//
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = addition(numberOne, numberTwo);
}
calculatorResult.addEventListener("click", handleResultClick);

// calculatorOperators.forEach(callInput => {
//   callInput.addEventListener(
//     "click",
//     () => (calculatorOutput.value = callInput.innerText)
//   );
// });

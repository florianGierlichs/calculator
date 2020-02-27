// calculations
export const addition = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

export const subtract = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
};

export const divide = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
};

export const multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

//Leons Lösung

export function calculate(numberOne, numberTwo, operator) {
  if (operator === "+") {
    return addition(numberOne, numberTwo);
  }
  if (operator === "-") {
    return subtract(numberOne, numberTwo);
  }
  if (operator === "*") {
    return multiply(numberOne, numberTwo);
  }
  if (operator === "/") {
    return divide(numberOne, numberTwo);
  }
}

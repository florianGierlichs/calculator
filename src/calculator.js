const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");

calculatorInputs.forEach(function(calculatorInput) {
  calculatorInput.addEventListener("click", function() {
    calculatorOutput.value = calculatorInput.innerHTML;
  });
});

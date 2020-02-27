export const addElement = numberOperator => {
  const newParagraph = document.createElement("span");
  const newContent = document.createTextNode(numberOperator);
  newParagraph.appendChild(newContent);

  const calculatorDiv = document.querySelector(".behind__calculation");
  document.body.insertBefore(newParagraph, calculatorDiv);
  newParagraph.className = "calculation";
};

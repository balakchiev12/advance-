function subtract() {
  let num1 = document.getElementById("firstNumber").value;
  let numberOne = Number(num1);

  let num2 = document.getElementById("secondNumber").value;
  let numberTwo = Number(num2);

  let result = numberOne - numberTwo;

  let resultElemt = document.getElementById("result");

  resultElemt.textContent = result;
}

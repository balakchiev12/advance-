function demoFunction(a, b, c) {
  let resultOfSum = a.length + b.length + c.length;
  let resultOfNum = resultOfSum / 3;
  resultOfNum = Math.round(resultOfNum);
  console.log(resultOfSum);
  console.log(resultOfNum);
}
demoFunction("chocolate", "ice cream", "cake");

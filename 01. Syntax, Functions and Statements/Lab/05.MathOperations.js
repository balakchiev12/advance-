function mathOperations(a, b, argument) {
  if (argument === "+") {
    console.log(a + b);
  } else if (argument === "-") {
    console.log(a - b);
  } else if (argument === "*") {
    console.log(a * b);
  } else if (argument === "/") {
    console.log(a / b);
  } else if (argument === "%") {
    console.log(a % b);
  } else if (argument === "**") {
    console.log(a ** b);
  }
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");

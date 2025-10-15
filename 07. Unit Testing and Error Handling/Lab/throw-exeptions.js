function getNumber() {
  let randomNum = Math.random();

  if (randomNum < 0.5) {
    throw {
      message: "Number is low ",
      type: "DGD",
    };
  }
  return Math.floor(randomNum * 100);
}

let number = getNumber();
console.log(number);

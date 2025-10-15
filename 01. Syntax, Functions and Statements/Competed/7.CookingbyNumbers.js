function solve(num, first, second, treed, four, five) {
  let number = Number(num);
  let oparacion = [first, second, treed, four, five];
  for (let index = 0; index < oparacion.length; index++) {
    if (number >= 1) {
      switch (oparacion[index]) {
        case "chop":
          number = number / 2;
          break;
        case "dice":
          number = Math.sqrt(number);
          break;
        case "spice":
          number++;
          break;
        case "bake":
          number = number * 3;
          break;
        case "fillet":
          number = number * 0.8;
          number = number.toFixed(2);
          break;
      }
      console.log(number);
    }
  }
}
//out put 3 4 2 6 4.8
solve("9", "dice", "spice", "chop", "bake", "fillet");
console.log("-------------------");

solve("32", "chop", "chop", "chop", "chop", "chop");

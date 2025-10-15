function solve(fruit, weight, money) {
  let nameOfFruit = fruit;
  let kiloWeight = weight;
  let price = money;
  kiloWeight = kiloWeight / 1000;
  price = kiloWeight * price;
  console.log(
    `I need $${price.toFixed(2)} to buy ${kiloWeight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);

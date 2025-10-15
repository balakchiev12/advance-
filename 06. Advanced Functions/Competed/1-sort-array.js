function solve(numbers, argument) {
  if (argument === "asc") {
    numbers.sort((a, b) => a - b);
  } else {
    numbers.sort((a, b) => b - a);
  }

  console.log(numbers);
}
solve([14, 7, 17, 6, 8], "desc");

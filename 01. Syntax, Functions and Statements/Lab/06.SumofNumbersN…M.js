function sumOfNumbers(start, end) {
  start = Number(start);
  end = Number(end);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers("1", "5"); // Example usage, you can change the numbers to test with different ranges

function solve(numbers, start, end) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }

  let startIndex = Math.max(start, 0);
  let ednIndex = Math.min(end, numbers.length - 1);
  let subNumbers = numbers.slice(startIndex, ednIndex + 1);

  let sum = subNumbers.reduce((a, x) => a + Number(x), 0);

  return sum;
}

// function solve(array, startIndex, endIndex) {
//   if (Array.isArray(array) == false) {
//     return NaN;
//   }
//   if (startIndex < 0) {
//     startIndex = 0;
//   }
//   if (endIndex > array.length - 1) {
//     endIndex = array.length - 1;
//   }
//   return array
//     .slice(startIndex, endIndex + 1)
//     .map(Number)
//     .reduce((acc, x) => acc + x, 0);
// }

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));

// function app() {
//   try {
//     let number = solve();

//     console.log(number);
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     console.log("always executes 1st");
//   }
// }
// app();
module.exports = solve;

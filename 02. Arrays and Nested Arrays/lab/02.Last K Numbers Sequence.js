function lastKNumbersSequence(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i - 1; j >= 0 && j >= i - k; j--) {
      sum += result[j];
    }
    result.push(sum);
  }
  return result;
}
console.log(lastKNumbersSequence(6, 3));
// only 1 time to get in console [1, 1, 2, 4, 7, 13]

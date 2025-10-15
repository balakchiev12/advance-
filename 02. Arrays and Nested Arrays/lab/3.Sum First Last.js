function sumFirstLast(num) {
  num = num.map(Number);
  let first = num[0];
  let last = num[num.length - 1];
  let sum = last + first;
  console.log(sum);
}
sumFirstLast(["20", "30", "40"]);

function solve(intput) {
  let negativNum = 0;
  let possitivNum = 0;
  let result = 0;
  let numberString = intput.toString();
  var sameNumber = numberString[0];
  sameNumber = Number(sameNumber);

  for (let i = 0; i < numberString.length; i++) {
    let num = numberString[i];
    num = Number(num);
    if (num === sameNumber) {
      result += num;
      possitivNum++;
    } else {
      result += num;
      negativNum++;
    }
  }
  if (possitivNum > negativNum) {
    console.log("true");
  } else if (possitivNum < negativNum) {
    console.log("false");
  }
  console.log(result);
}
solve(1234);
solve(2222222);

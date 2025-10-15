function sumTable() {
  let costElements = document.querySelectorAll("tr td:nth-of-type(2n) ");

  let sum = Array.from(costElements).reduce((a, x) => {
    let curentValue = Number(x.textContent) || 0;
    return a + curentValue;
  }, 0);

  let resultElemnt = document.getElementById("sum");
  resultElemnt.textContent = sum;
}

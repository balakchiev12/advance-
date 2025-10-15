function deleteByEmail() {
  let gamilInputElement = document.querySelectorAll("tr td:nth-of-type(2)");
  let deleteElemnts = document.querySelector("input[name = 'email']");
  let result = document.getElementById("result");

  // applies for nodeList and html colec
  let gmailElemnst = Array.from(gamilInputElement);
  let target = gmailElemnst.find((x) => x.textContent == deleteElemnts.value);

  if (target) {
    result.textContent = "Deleted";
  } else {
    result.textContent = "Not found.";
  }
}
// let resultElemnt = document.getElementById("result");

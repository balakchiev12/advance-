function extractText() {
  const idByelembs = document.getElementById("items");

  let textResult = document.getElementById("result");
  textResult.textContent = idByelembs.textContent;
}

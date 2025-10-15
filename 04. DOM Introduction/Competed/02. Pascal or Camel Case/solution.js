function solve() {
  let text = document.getElementById("text").value;
  let conver = document.getElementById("naming-convention").value;
  let result = "";

  if (conver === "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (conver === "Pascal Case") {
  } else {
  }
  let resultElemt = document.getElementById("result");
  resultElemt.textContent = result;
}

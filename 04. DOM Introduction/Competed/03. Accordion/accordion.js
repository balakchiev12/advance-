function toggle() {
  let buttonElement = document.querySelector(".button");
  let textElement = document.getElementById("extra");

  if (buttonElement.textContent === "More") {
    buttonElement.textContent = "Less";
    textElement.style.display = "block";
  } else {
    buttonElement.textContent = "More";
    textElement.style.display = "none";
  }

  //   if (textElement.style.display === "none") {
  //     textElement.style.display = "block";
  //   } else {
  //   }
}

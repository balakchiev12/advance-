function addItem() {
  let itemsElements = document.getElementById("items");
  let textInputElement = document.getElementById("newItemText");
  let createdLi = document.createElement("li");
  createdLi.textContent = textInputElement.value;

  textInputElement.value = "";

  let linkELement = document.createElement("a");
  linkELement.href = "#";
  linkELement.textContent = "[Delete]";
  linkELement.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });
  createdLi.appendChild(linkELement);
  itemsElements.appendChild(createdLi);
}

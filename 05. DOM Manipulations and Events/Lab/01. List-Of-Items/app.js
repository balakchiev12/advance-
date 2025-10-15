function addItem() {
  let ulElements = document.getElementById("items");
  let createdLi = document.createElement("li");
  let newItemElement = document.getElementById("newItemText");
  createdLi.textContent = newItemElement.value;
  ulElements.appendChild(createdLi);
}

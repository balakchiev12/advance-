window.addEventListener("load", solve);

function solve() {
  const addButtomElement = document.getElementById("add");
  const addButonElement = document.getElementById("add");
  const modelInputElement = document.getElementById("model");
  const yearInputElement = document.getElementById("year");
  const descriptionElement = document.getElementById("description");
  const priceInputElement = document.getElementById("price");
  const furnitureListElement = document.getElementById("furniture-list");
  addButtomElement.addEventListener("click", (e) => {
    e.preventDefault();

    let model = modelInputElement.value;
    let description = descriptionElement.value;
    let year = Number(yearInputElement.value);
    let price = Number(priceInputElement.value);

    if (!modelInputElement.value || !descriptionElement.value) {
      return;
    }
    if (year <= 0 || price <= 0) {
      return;
    }

    let rowElement = document.createElement("tr");
    let modelCellElement = document.createElement("td");
    let preiceCellElement = document.createElement("td");
    let actionsCellElemnt = document.createElement("td");
    let infoButton = document.createElement("button");
    let buyButtonElement = document.createElement("button");
    let contentsRowElement = document.createElement("tr");
    let yearContentElement = document.createElement("tr");
    let descriptionContentElement = document.createElement("td");
    modelCellElement.textContent = model;
    preiceCellElement.textContent = price.toFixed(2);

    infoButton.textContent = "More Info";
    infoButton.classList.add("moreBtn");
    buyButtonElement.textContent = "Buy it";
    buyButtonElement.classList.add("buyBtn");
    infoButton.addEventListener("click", (e) => {
      if (e.currentTarget.textContent == "More Info") {
        contentsRowElement.style.display = "contents";
        e.currentTarget.textContent = "less Info";
      } else {
        contentsRowElement.style.display = "none";
        e.currentTarget.textContent == "More Info";
      }
    });

    actionsCellElemnt.appendChild(infoButton);
    actionsCellElemnt.appendChild(buyButtonElement);

    rowElement.classList.add("info");

    rowElement.appendChild(modelCellElement);
    rowElement.appendChild(preiceCellElement);
    rowElement.appendChild(actionsCellElemnt);

    yearContentElement.textContent = `Year: ${year}`;
    descriptionContentElement.setAttribute("colspan", 3);
    descriptionContentElement.textContent = `Description: ${description}`;

    contentsRowElement.classList.add("hide");
    contentsRowElement.style.display = "none";

    furnitureListElement.appendChild(rowElement);
    furnitureListElement.appendChild(contentsRowElement);
  });
}

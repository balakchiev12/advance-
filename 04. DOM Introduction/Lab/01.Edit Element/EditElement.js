function editElement() {
  const conted = element.textContent;
  let param = new RegExp(match, "g");
  const edited = conted.replace(param, replace);
  element.textContent = edited;
}

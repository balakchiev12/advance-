function search() {
  let userdWord = document.getElementById("searchText").value;
  let townsElemnt = Array.from(document.querySelectorAll("#towns li"));
  let result = document.getElementById("result");
  let maches = 0;
  for (let towns of townsElemnt) {
    if (towns.textContent.includes(userdWord)) {
      towns.style.fontWeight = "bold";
      towns.style.textDecoration = "underline";
      maches++;
    } else {
      towns.style.fontWeight = "normal";
      towns.style.textDecoration = "none";
    }
  }
  result.textContent = `${maches} matches found`;
}

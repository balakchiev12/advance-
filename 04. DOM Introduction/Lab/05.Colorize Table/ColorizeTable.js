function colorize() {
  let rwoElemns = document.querySelectorAll("tr:nth-of-type(2n) td");
  rwoElemns.forEach((x) => {
    x.style.backgroundColor = "teal";
  });
}

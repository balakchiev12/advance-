function solve(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let slicenums = input[i];
    let commandParts = slicenums.split(" ");
    let firstElement = commandParts[0];
    let secondElement = commandParts[1];

    if (firstElement === "add") {
      result.push(secondElement);
    } else if (firstElement === "remove") {
      result = result.filter((item) => item !== secondElement);
    } else if (firstElement === "print") {
      console.log(result.join(","));
    }
  }
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);

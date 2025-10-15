function solve(input) {
  let obj = {};
  for (const i of input) {
    let info = i.split(" <-> ");
    let town = info[0];
    let townPopulacion = Number(info[1]);

    if (!obj[town]) {
      obj[town] = 0;
    }
    obj[town] += townPopulacion;
  }
  for (const town in obj) {
    console.log(`${town}: ${obj[town]}`);
  }
}

solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

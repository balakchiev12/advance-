let phone = {
  Ivan: "+359 7632789309876",
  Georgi: "+359 678987678",
  "Ivan Georgiev": "359 4532434",
};
console.log(phone["Ivan Georgiev"]);
phone["Ivan Georgiev"] = "32749247";
console.log(phone["Ivan Georgiev"]);

// iteracion
for (const key in phone) {
  console.log(kye);
}

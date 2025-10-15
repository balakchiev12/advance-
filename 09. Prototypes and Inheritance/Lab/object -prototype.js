// make object
let person = {
  name: "Pesho",
  age: 25,
  height: 199,
};
// making personPrototype  try to add in object {person};
let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 80;
console.log(personPrototype);
// try to see somnting is change if not weight is in object prototype
console.log(person);
// check object prototype
console.log(person.weight);

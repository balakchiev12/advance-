let person = {
  name: "Pesho",
  age: 23,
};

let interlNameProperties = Object.getOwnPropertyDescriptors(person, "name");
console.log(interlNameProperties);

Object.defineProperty(person, "name", { enumerable: true });

// add new property and confingure internal prop
Object.defineProperty(person, "height", { value: 190, enumerable: true });
for (const key in person) {
  console.log(key);
}
console.log(person.height);

console.log(person);

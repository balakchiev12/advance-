function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}
let person = new Person("Pesho", 22, 190);

console.log(person);
console.log(person instanceof Person);

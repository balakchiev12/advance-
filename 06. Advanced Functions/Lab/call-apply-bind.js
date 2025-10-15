//call
function introudce(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}
introudce("Gosho", "Ivanov"); // globall invocation

let person = {
  name: "Pesho",
};
introudce.call(person, "Gosho", "Ivanov"); // invoke using call
introudce.apply(person, ["Stamat", "Ivanov"]); //invoke using  apply

// bind

let superHero = {
  name: "Superman",
};

let sperIntro = introudce.bind(superHero, "Jenata", "Chudo");
sperIntro();

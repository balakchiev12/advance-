class Cat {
  isHungry = true;
  constructor(name) {
    this.name = name;
  }
  static vetCheck(cat) {}
}

let fisrtsCat = new Cat("Pisan");
let secondCat = new Cat("Garry");

console.log(fisrtsCat);
console.log(secondCat);

secondCat.name = "G";
console.log(secondCat);
/*
// second
let catName = ["Navcho", "Garry", "Mishy"];

let cats = catName.map((x) => new Cat(x));
console.log(cats);
*/
//instance
console.log(fisrtsCat instanceof Cat);
console.log(fisrtsCat instanceof Object);

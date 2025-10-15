class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
  get diametr() {
    return this.radius * 2;
  }

  set diametr(value) {
    if (value < 0) {
      throw new Error("Diametre is less 0 ");
    }
    this.radius = value / 2;
  }
}

let circle = new Circle(2);

console.log(circle.area);
circle.diametr = 10;
console.log(circle.radius);

console.log(circle.area);

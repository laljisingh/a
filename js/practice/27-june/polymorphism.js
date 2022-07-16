class Shape {
  constructor() {}
  area() {
    return 0;
  }
  perimeter() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();

    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

var circle = new Circle(5);
var rectangle = new Rectangle(5, 10);
console.log(circle.area());
console.log(rectangle.area());

function a(a, b) {
  console.log(a, b);
}
function a(a, b, c) {
  console.log(a, b, c);
}

a(1, 2);

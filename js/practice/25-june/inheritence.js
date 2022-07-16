class A {
  name = "Geeksss";
  display() {
    console.log(this.name);
  }
}
class B extends A {
  city = "allahabad";
  print() {
    console.log(this.city);
  }
}
let b = new B();
b.display();
b.print();
b.name = "lalji";
b.city = "Uttar Pradesh";
b.display();
b.print();

class Parent {
  constructor(a, b, c) {
    var name = a;
    var age = b;
    var mob = c;
  }
  getdata() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.mob);
  }
}
class A extends Parent {
  constructor() {
    super();
    this.name = "A";
    this.age = "20";
    this.mob = "1234567890";
  }
  display() {
    console.log(prompt("Enter name"));
    console.log(prompt("Enter age"));
    console.log(prompt("Enter mobile no"));
  }
}
class B extends A {
  display() {
    console.log(prompt("Enter name"));
    console.log(prompt("Enter age"));
    console.log(prompt("Enter mobile no"));
  }
}
class C extends Parent {
  constructor() {
    super();
    this.name = "C";
    this.age = "30";
    this.mob = "1234567890";
  }
  display() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.mob);
  }
}

Parent.prototype.checkdata = function () {
  console.log("Parent class");
};
var a = new A("lalji", "20", "1234567890");
a.getdata();
// a.display();
var b = new B("lalji", "20", "1234567890");
// b.display();
var c = new C("lalji", "20", "1234567890");
c.getdata();
c.checkdata();

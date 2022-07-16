class Person {
  name;
  id;

  display() {
    console.log(this.name + " " + this.id);
  }
}
s1 = new Person();
s1.name = "lalji";
s1.id = 15263;
s1.display();

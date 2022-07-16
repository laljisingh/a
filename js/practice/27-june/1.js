class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(this.name);
    console.log(this.age);
  }

  lal() {
    console.log("I am a static method");
  }
}

class user2 extends User {
  constructor(name, age) {
    super(name, age);
  }
  getName() {
    console.log(this.name);
    console.log(this.age);
  }
  paidCourse = [];
  paidCourseArr(name) {
    this.paidCourse.push(name);
  }
  getPaidCourse() {
    console.log(this.paidCourse);
  }
}

User.prototype.chauhan = function (name) {
  var nn = name;
  console.log("I am a prototype method" + nn);
};

let obj = new User("sachin", "30");
var n = prompt("Enter your name");
console.log(n);
obj.lal();
obj.chauhan("n");
let user12 = new user2("John", 30);
user12.paidCourseArr(["lalji", "singh", "chauhan"]);
user12.getPaidCourse();
user12.lal();
user12.chauhan();

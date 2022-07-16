function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

let check = function (a, b) {
  return a - b;
};
console.log(check(1, 2));

// let age = 158;
// if (age >= 18) {
//   function eligible() {
//     console.log("OKKKK");
//   }
// } else {
//   function eligible() {
//     console.log("NOOO");
//   }
// }
// eligible();

// let age = 158;
// let eligible;
// if (age >= 18) {
//   eligible = function () {
//     console.log("OKKKK");
//   };
// } else {
//   eligible = function () {
//     console.log("NOOO");
//   };
// }
// console.log(eligible);
// eligible();

let a = "+";
if (a === "+") {
  function sum(a, b) {
    console.log(a + b);
  }
} else {
  function minus(a, b) {
    console.log(a - b);
  }
}
sum(1, 2);
// minus(1, 2);

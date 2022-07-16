//eligible for voting or not
let age = 18;
let a;
if (age < 18) {
  a = 1;
} else if (age === 18) {
  a = 0;
} else {
  a = 2;
}

switch (a) {
  case 0:
    console.log("You are eligible for voting");
    break;
  case 1:
    console.log("You are not eligible for voting");
    break;
  case 2:
    console.log("you are eligible for voting");
    break;
  default:
    console.log("not determined");
    break;
}

//number is greater than 5 or not
let number = 10;
let i;
if (number < 5) {
  i = 1;
} else if (number === 5) {
  i = 0;
} else {
  i = 2;
}

switch (i) {
  case 0:
    console.log("Number is equal to the given number");
    break;
  case 1:
    console.log("number is less than 5");
    break;
  case 2:
    console.log("number is greater than 5");
    break;
  default:
    console.log("not determined");
    break;
}

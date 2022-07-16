//positive
let num = -10;
let c;
if (num < 0) {
  c = 1;
} else if (number1 === 0) {
  c = 0;
} else {
  c = 2;
}

switch (c) {
  case 0:
    console.log("Number Is a positive number");
    break;
  case 1:
    console.log(`${num} is a negative number`);
    break;
  case 2:
    console.log(`${num} is a positive number`);
    break;
  default:
    console.log("not determined");
    break;
}

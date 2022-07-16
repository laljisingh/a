//number is greater than 5 or not
let number1 = 10;
let number2 = 5;
let i;
if (number1 < number2) {
  i = 1;
} else if (number1 === number2) {
  i = 0;
} else {
  i = 2;
}

switch (i) {
  case 0:
    console.log(`${number1} is equal to ${number2}`);
    break;
  case 1:
    console.log(`${number1} is less than ${number2}`);
    break;
  case 2:
    console.log(`${number1} is greater than ${number2}`);
    break;
  default:
    console.log("not determined");
    break;
}

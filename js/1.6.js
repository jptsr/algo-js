// Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");

let num1 = new Number(readlineSync.question("Give me an integers: "));
let num2 = new Number(readlineSync.question("Give me a second integers: "));
let modulo = num1 % num2;
console.log(modulo);
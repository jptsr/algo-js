// Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

const readlineSync = require("readline-sync");

let num1 = Math.trunc(new Number(readlineSync.question("Give me a decimal number: ")));
let num2 = new Number(readlineSync.question("Give me a second decimal number: "));
//let num3 = Math.trunc(new Number(readlineSync.question("Decimal in integer: ")));
let answer = num1 * num2;
console.log(answer);
//console.log(num3);
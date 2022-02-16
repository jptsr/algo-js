/* Ask to the user its shoe size and its birth year. Then make the following calculation:

Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766
Test with your own birth year and your shoe size. */

const readlineSync = require("readline-sync");

let shoeSize = new Number(readlineSync.question("What is your shoe size ? "));
let birthYear = new Number(readlineSync.question("What's your year of birth ? "));
let mult1 = shoeSize * 2;
let add1 = mult1 + 5;
let mult2 = add1 * 50;
let sub = mult2 - birthYear;
let asw1 = sub + 1766;
console.log(asw1);
let myShoeSize = 37;
let myBirthYear = 2000;
let myAsw = ((((myShoeSize * 2) + 5) * 50) - myBirthYear) + 1766;
console.log(myAsw);
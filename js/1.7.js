/* Ask to the user its shoe size and its birth year. Then make the following calculation:

Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766
Test with your own birth year and your shoe size. */

/* Var, let, const
Var: goblal or local (in/outside a function). Can be re-declared and update. Needs to be on the top of the scope, if not, it'll be 
"undefined".
Let: preferred for variable declarations. Blocked scope {}, means that the variables declared inside the block will only live inside. Can be
updated but not re-declared. If we re-declare the same variable in different scopes then no error. Needs to be on the top of the scope, if 
not, it'll be "Reference Error".
Const: variable for constant values. Block scope {}. Cannot be updated or re-declared. Const object can see their properties updated.
    const greeting = {
        message: "say Hi",
        times: 4
    }
    greeting = {
        words: "Hello",
        number: "five"
    } => CAN'T
    greeting.message = "say Hello instead"; => OK
Needs to be on the top of the scope. */

/* Declare, redeclare and update : 
Let hi = "hello"; (declare)
let hi = "bonjour"; (re-declare)
hi = "bonjour*; (update) */

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
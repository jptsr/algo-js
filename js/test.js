const readlineSync = require("readline-sync");

//console.log("It works !!!");

// ASK DATA TO THE USER
// let userName = readlineSync.question('Can you give me your name please ?');
// console.log("Hello " + userName);

// VARIABLES
// numbers
// let age = 25;
// age = 36;
// age = 18;
//phrase
// let phrase = "Coding is fun!";
// booleans
// let isItTrue = true;
// let isItFalse = false;

// NUMBERS
// let age = 23;
// let sisterAge = age + 11;
// age += 12; // age = age + 12 = 35
// console.log(age);

// STRINGS
// let name = "Jean";
// let nameSister = "Emma";
// console.log("My name is " + name);
// console.log("My name is " + nameSister);
// let userName = readlineSync.question("What is your name ?");
// console.log("He's called " + userName);

// NEW NUMBER()
// let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have ?'));
// let cssBadges = new Number(readlineSync.question('How many CSS badges do you have ?'));
// let totalBadges = htmlBadges + cssBadges;
// console.log('Woaw you have ' + totalBadges + " !");
// new Number() converts a string to a number.
// beware  of variable type !
// console.log('10' + '5');
// console.log(10 + 5);

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

// COMPARISON OPERATORS
// ===: returns true if both operands have exactly the same value. Else it returns false.
// !=: returns true if both operands don't have the same value.
// >: returns true if the first operand is strictly greater than the second one.
// <: returns true if the first operand is strictly lower than the second one.
// >=: returns true if the first operand is greater than or equal to the second one.
// <=: returns true if the first operand is lower than or equal to the second one.

// LOGIC OPERATORS 
// &&: returns true if both operands are true.
// ||: returns true if any of the operands are true.
// !: only takes one operand. Inverse the value of its operand. If it was true it becomes false. If it was false it becomes true.

// ELSE IF
// Another structure to use along if. It allows to make a second test only if the previous one already failed. Note that you can use as many 
// else if as you want.
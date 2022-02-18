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



// ARRAY
// The [] syntax allows to access a specific element in the array using its index. Note that, in JavaScript, we always consider that indexes 
// start at 0. So the first element is at index 0, the second one at index 1, etc...

/*You can also modify a specific element this way:
let arr = [1, 2, 3];
arr[2] = 4;
console.log(arr); // [1, 2, 4] 
arr.length // size of the array */

// Add and remove from an array
// push() and pop() respectively. Note that they only work on the end of the array.

// Itarate on array
// let arr = ["Apple", "Pear", "Banana"];
// For ... of
// for (let elem of arr) {
//   console.log("Do you want to eat a " + elem + "?");
// }



/* Separation of concerns (SoC) is a design principle for separating a computer program into distinct sections. Each section addresses a 
separate concern, a set of information that affects the code of a computer program. */



// FUNCTIONS

// Simple function definition
/* 
function add(a, b) {
  return a + b;
}
console.log("The sum of 2 and 3 is " + add(2, 3));
It's the basic way to declare a function. The additional parameters we pass when calling a function are called its arguments. A function 
can also return something using return. (But it doesn't have to.) */

// Arrow funcitons
/* let myFunction = (a, b) => {
    return a + b;
  }
  console.log(myFunction(2, 3)); // 5
  
  myFunction = (a, b) => {
    return a * b;
  }
console.log(myFunction(2, 3)); // 6
Arrow functions ("arrow" is simply related to the look of the => symbol) is a shorter syntax to define functions. But it's important to 
know that when doing so the function is an anonymous one. This means it doesn't have a specific name. That's why just defining it is 
useless unless you do something with it. (Like assigning it to a variable in the examples.) */

// Recursivity
/* This has nothing to do with a language element in JavaScript. Recursivity is a programming technique that you can use in all programming 
languages. It's used when a function calls itself.
There exist some mathematical demonstrations that prove recursive functions can always be used instead of loops for all type of calculation, 
just like the opposite is true. In term of ease of use and readability sometimes loops are more appropriate and sometimes recursive functions 
are better. */
// function count(i) {
//     if (i <= 100) {
//       console.log(i);
//       count(i + 1); //rappelle la fonction
//     }
// }
// count(1);
// displays all numbers from 1 to 100



// CLASSES
// Classes are like an object template. They allow to create objects.

// Constructor and instances
// Classes often have a constructor. It's a function that will be called when the object is created.
// When we create an object from a class we call that object an instance of that class. The act of creating it is called the instanciation.
// We instanciate objects using the new keyword.

// Methods and this
// Classes will usually contain methods. That's just another name for function in the context of classes.
// Methods (just like the constructor or the accessors) can use the this keyword to access the current object.

// Accessors
// As we've seen it you can access any attribute inside an object simply using the . operator. Classes allow us to make "fake" attributes 
// that will instead trigger a function when we try to get or set them.

// Class inheritance
// Even though it's an advanced technique mostly used in frameworks that we will not discuss much more, know that it's possible to re-use 
// the features of a class in another class. That's what's called inheritance.
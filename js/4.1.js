// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that 
// asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you 
// created.
// Write a documentation for the calcSurface function.

/** 
 * Exercise about Javascript functions
 * readlineSync import the library
 * calcSurface calculate the surface of a rectangle
 * askL & askW to ask user about a length and a width to insert in our function
*/

const readlineSync = require("readline-sync");

function calcSurface(length, width){
    return length * width;
}
console.log(calcSurface(4, 5));

let askL = new Number(readlineSync.question("What is the length of the rectangle ? "));
let askW = new Number(readlineSync.question("What is the width of the rectangle ? "));

console.log(calcSurface(askL, askW));

/* function askUser(askL, askW){
    askL = new Number(readlineSync.question("What is the length of the rectangle ? "));
    askW = new Number(readlineSync.question("What is the width of the rectangle ? "));
    return askL * askW;
}
console.log(askUser()); */
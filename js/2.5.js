/* Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. 
(This program should never end as long as the user didn't chose 42). */

const readlineSync = require("readline-sync");

let favNber = new Number(readlineSync.question("What is your favorite number ? "));
while(favNber != 42){
    console.log("Are you sure ?");
    favNber = new Number(readlineSync.question("What is your favorite number ? "));
}
console.log("I knew it !");
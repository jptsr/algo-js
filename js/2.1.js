/* Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an 
adult". */

const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question("What's your age ? "));
if(age >= 18){
    console.log("Your are an adult");
}else{
    console.log("You are not an adult yet");
}
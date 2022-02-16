/* Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. 
(1 => Monday, 2 => Tuesday, etc...) */

const readlineSync = require("readline-sync");

let nber = new Number(readlineSync.question("Enter a number between 1 and 7 : "));
while(nber < 1 || nber > 7){
    console.log("Error");
    nber = new Number(readlineSync.question("Enter a number between 1 and 7 : "));
}
if(nber == 1){
    console.log("Monday");
}else if (nber == 2){
    console.log("Tuesday");
}else if (nber == 3){
    console.log("Wednesday");
}else if (nber == 4){
    console.log("Thursday");
}else if (nber == 5){
    console.log("Friday");
}else if (nber == 6){
    console.log("Saturday");
}else if (nber == 7){
    console.log("Sunday");
}
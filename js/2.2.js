/* Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. 
(It must not ask any other question.)
Bonus 2: be polite in the error messages. (facultative) */

const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("Can you give me a minimal number ? "));
let max = new Number(readlineSync.question("Can you give me a maximal number ? "));
if(min > max){
    console.log("Error: the minimal number is greater than the maximal one. The minimal number should be smaller than the maximal one. Please retry")
}else{
    let current = new Number(readlineSync.question("Can you give me a number ? "));

    if(min<current<max){
        console.log(current);
    }
    
    if(current > min && current < max){
        console.log(current);
    }
}





/* Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all 
the numbers collected this way.
Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6. */

const readlineSync = require("readline-sync");

let nber = new Number(readlineSync.question("Enter a number : "));
var sum = 0;
for(let i = 0; i < nber; i++){
    let newNber = []; 
    newNber[i] = new Number(readlineSync.question("Enter a new number : "));
    sum += newNber[i];

    // if(i == (nber - 1)){
    //     // console.log(i);
    //     sum = newNber + newNber;
    //     console.log(sum);
    // }
    // let asw = newNber + newNber;
    // console.log(asw);
}
console.log(sum);
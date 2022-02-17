// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must 
// return the distance between those two points.
// Examples results:
// Point A = [1, 1], point B = [2, 2] => 1.41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5.65
// Create a program to use that function.
// Write a documentation for the calcDistance function.
// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to 
// search for useful functions in JavaScript to help you making complex mathematical formulas...

/**
 * calcDistance calculte the distance between two points in a 2D space
 * allDist ask a number of checkpoint between the start and final point to the user and then calculte distance between each points and 
   the final distance
 */

const readlineSync = require("readline-sync");

function calcDistance(x1, y1, x2, y2){
    x1 = (Math.floor(Math.random() * 101));
    y1 = (Math.floor(Math.random() * 101));
    x2 = (Math.floor(Math.random() * 101));
    y2 = (Math.floor(Math.random() * 101));
    let distance = Math.hypot(x2 - x1, y2 - y1);
    let roundNber = Math.round(distance * 100) / 100;
    return roundNber;
}
// console.log(calcDistance());

let dist = 0;
let allDist = 0;
function path(askUser){
    askUser = new Number(readlineSync.question("How many stop doyou want on your path ? "));
    for(let i = 0; i < askUser + 1; i++){
        dist = calcDistance();
        console.log("Dist " + (i + 1) + ": " + dist);
        allDist += dist;
    }
    let roundAllDist = Math.round(allDist * 100) / 100;
    return roundAllDist;
}
console.log("Final distance : " + path());
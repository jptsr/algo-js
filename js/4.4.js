// Create a function named average(arr) that takes an array of numbers as argument and returns the average.
// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
// Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, 
// min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.
// Write a documentation for all the functions you created.

/**
 * rand10(number) create random integers between 0 and 10
 * multirand(n) create an array of the amout of numbers aks to the user
 * average(arr) gives us the average of the array
 * min(arr) gives us the min number of the array
 * max(arr) gives us the max number of the array
 */

const readlineSync = require("readline-sync");

function rand10(number){
    number = 11;
    return Math.floor(Math.random() * number);
}

let arr1 = [];
let askNber = new Number(readlineSync.question("Can you give me a number ? "));
function multiRand(n){
    n = askNber;
    for(let i = 0; i < n; i++){
        arr1.push(rand10(11));
    }
    return arr1;
}
// console.log(multiRand());

let sum = 0;
function average(arr){
    arr = multiRand();
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let asw = sum / arr.length;
    return asw;
}

function min(arr){
    arr = multiRand();
    let minNber = Math.min(...arr);
    return minNber;
}

function max(arr){
    arr = multiRand();
    let maxNber = Math.max(...arr);
    return maxNber;
}

console.log("Average : " + average() + " - " + "Min number : " +  min() + " - " + "Max number : " + max());
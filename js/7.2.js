// FIBONACCI NUMBERS
// Make a program that asks for an integer n and generates the n first Fibonacci numbers.
// Yes, you'll have to search what the hell are Fibonacci numbers.



const readlineSync = require("readline-sync");

let askUser = readlineSync.questionInt("Give me a number : ");
let arr = [0, 1, 1];

function fibonacci(){
    for(let i = 3; i < askUser; i++){
        arr[i] = arr[i-1] + arr[i-2];
        
        if(arr[i] >= askUser){
            askUser = 0;
            if(arr[i] > askUser){
                arr.length--;
            }
        }
    }
    console.log(arr);
}

// function fibonacci(askUser){
//     askUser = readlineSync.questionInt("Give me a number : ");
//     for(let i = 2; i <= askUser; i++){
//         c = a + b;
//         a = b;
//         b = c;       
//     }
//     console.log(arr);
// }

fibonacci();
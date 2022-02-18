// DIVISORS
// Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.
// Examples:
// 7 => nothing (it's a prime number)
// 10 => 2 5
// 9187 => nothing (it's a prime number too)
// 134234 => 2 41 82 1637 3274 67117



const readlineSync = require("readline-sync");

let final_n; 
let prime_n = 2;

let modulo;

function ask(askUser){
    askUser = readlineSync.questionInt("Can you give me en positive integer superior to 0 ? ");
    final_n = Math.abs(askUser);
    divisors(final_n);
}

// function divisors(nb){
//     for(let i = 0; i = i; i++){
//         arr[i] = nb / prime_n;
//         if((arr[i] % prime_n) != 0 || (arr[i] % prime_n) != -0){
//             prime_n++;
//             i++;
//         }else if(prime_n > arr[i]){
//             i = null;
//         }
//     }
//     console.log(arr);
// }

function divisors(nb){
    let arr = [];
    for(let i = 2; i < nb; i++){
        modulo = nb % i;
        if(nb % i === 0 || nb % i === -0){
            nb = nb/i;
            // console.log("/" + i);
            arr.push(i);
            // console.log(nb);
            arr.push(nb);
            // console.log(arr);
            i--;
        }else if(modulo !== 0 || modulo !== -0){
            i++;
            // console.log("= " + i);
            // console.log("nb = " + nb);
            if(i == nb){
                // console.log("All the divisor are here.");
                i = nb +1;
            }
            nb = nb/i;
            if(Number.isInteger(nb)){
                // console.log("/" + i);
                arr.push(i);
                // console.log(nb);
                arr.push(nb);
            }else{
                nb = nb * i;
            }
        }
    }
    arr.sort(function(a, b){return a-b});
    let newArr = [...new Set(arr)];
    console.log(newArr);
}

ask();
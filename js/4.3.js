// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 
// 1 and 10. You should not modify anything in rand10() to achieve this.
// Write a documentation for the multiRand(n) function.
// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random 
// numbers.

function rand10(number){
    return Math.floor(Math.random() * number);
}

/**
 * multiRand(n) crée un tableau qui contient un tableau de n nombres générés àpd de la fonction rand10(number).
 */

let arr = [];
function multiRand(n){
    for(let i = 0; i < n; i++){
        //arr[i].push(nber);
        arr.push(rand10(11));
    }
    return arr;
    // return arr.push(4);
}
console.log(multiRand(6));
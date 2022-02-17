// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.

// let mult = 1;
// function factorial(a){
//     // if(a > 0){
//     //     for(let i = 1; i < a; i++){
//     //         mult *= a;
//     //         // console.log(mult);
//     //     }
//     // }
//     // return mult;

//     // if(a > 0 && a != 0){
//     //     for(let i = a -1; i < a; i--){
//     //         a *= i;
//     //         // console.log(mult);
//     //     }
//     // }
//     // return a;

//     if(a > 0){
//         for(let i = a -1; i >= 1; i--){
//             a *= i;
//         }
//     }
//     return a;
// }
// console.log(factorial(3));

function factorial(a){
    if(a < 0){
        return -1;
    }else if(a == 0){
        return 1;
    }else{
        return (a * factorial(a-1));
    }
}
console.log(factorial(5));
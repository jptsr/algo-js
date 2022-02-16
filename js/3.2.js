// Write a program that will calculate the average value of a given array.
// Test it with the following arrays:
// [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101

let arr = [1, 2, 3, 4, 5];
var sum = 0;
for(let i = 0; i < arr.length; i++ ){
    sum += arr[i];
}
let asw = sum / arr.length;
console.log(asw);
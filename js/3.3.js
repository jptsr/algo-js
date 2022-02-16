// Write a program that will create a duplicate of a given array.
// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. 
// (You'll have to search on the MDN or Google for this one.)

/* for(let elem of arr){
    console.log("Je m'appelle " + elem + ".");
}*/

let arr1 = ["Pierre", "Paul", "Jacques"];
let arr2 = [];
arr2.push(arr1); // push the entire array, means that arr2 has a length of 1

let arr3 = [];
for(let i = 0; i < arr1.length; i++){
    arr3.push(arr1[i]);
}
console.log(arr3);
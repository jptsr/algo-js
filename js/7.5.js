// Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.

let done;
let numbers = [50, 5, 15, 11, 200, 13, 202];

function sortArr(array) {
    done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
          done = false;
        }
      }
    }
    return array;
  }
  console.log(sortArr(numbers));
/* Create a "Story Teller".
Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!
Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked. */

const readlineSync = require("readline-sync");

let questions = 3;

let firstName = readlineSync.question("What's your favorite firstName ? " + "(Questions remaining: " + questions + ") ");
questions --;
let name = readlineSync.question("What's your favorite name ? " + "(Questions remaining: " + questions + ") ");
questions --;
let age = readlineSync.question("What's your ideal age ? " + "(Questions remaining: " + questions + ") ");
questions --;
let food = readlineSync.question("What's your favorite food ? " + "(Questions remaining: " + questions + ") ");
questions --;
console.log(firstName + " " + name + " is a kind person but a really small person. At the age of " + age + " even an apple is taller. In" + 
" order to change the game, that person decide to eat " + food +  " for ever.");
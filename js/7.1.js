// NUMBER GUESSER
// Make a program that generates an integer between 1 and 100 (don't display it to the user).
// Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which is too low it should 
// display "Too low" and re-ask the question. If the user enters a number which is too high it should display "Too high" and re-ask the question. 
// If the user guess correctly it should display "Well guessed!" and exit.



const readlineSync = require("readline-sync");

let r_nber = Math.floor(Math.random() * 11);

function guessNber(askUser){
    askUser = readlineSync.questionInt("Guess the number : ");
    isGuessed(askUser);
}

function isGuessed(nber){
    if(nber < r_nber){
        console.log("Too low");
        guessNber();
    }else if(nber > r_nber){
        console.log("Too high");
        guessNber();
    }else{
        console.log("Well guessed!");
    }
}

guessNber();
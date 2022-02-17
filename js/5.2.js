// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and 
// return a list of the same cast but in a random order.
// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list 
// of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");

let q_name;
let q_year;
let howMany;
let q_member;
let q_members = [];
let tvShow = {};
let newArr;

function askTvSerie(){
    q_name = readlineSync.question("What's your favorite TvShow ? ");
    q_year = new Number(readlineSync.question("What's the year of production ? "));
    howMany = new Number(readlineSync.question("How many members ? "));

    if(howMany == 1){
        q_member = readlineSync.question("What are the member's name ? ");
        tvShow = {
            name: q_name,
            year: q_year,
            member: q_member
        }
    }else if(howMany > 1){
        for(let i = 0; i < howMany; i++){
            q_members[i] = readlineSync.question("What are the members' name ? ");
        }
        
        tvShow = {
            name: q_name,
            year: q_year,
            members: q_members
        }
    }else{
        let errorMsg = "Error";
        return errorMsg;
    }

    let jsonFile = JSON.stringify(tvShow, null, 2);
    return q_members;
}
// console.log(askTvSerie());

// function randomizeCast(tvSerie){
//     tvSerie = [];
//     tvSerie = askTvSerie();

//     //return tvSerie;

//     for(let i = tvSerie.length; i > 0; i--){
//         j = Math.floor(Math.random() * (i + 1));
//         console.log(j);
//         newArr = tvSerie[i];
//         tvSerie[i] = tvSerie[j];
//         tvSerie[j] = newArr;
//         // newArr[i] = tvSerie[j];
//     }
//     return newArr;
// }

function randomizeCast(tvSerie){
    tvSerie = [];
    tvSerie = askTvSerie();
    newArr = tvSerie.sort(function(){return 0.5 - Math.random()});
    return newArr;
}
console.log(randomizeCast());

// function newSerie(){
    
// }
// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and 
// return a list of the same cast but in a random order.
// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list 
// of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");

let q_name;
let q_year;
let howMany;
// let q_member;
let q_members = [];
let tvShow = {};
let newMembers = [];
let newArr;
let previousTVSerie = {};
let nextTvSerie = {};
let allSeries = {};

function askTvSerie(){
    q_name = readlineSync.question("What's your favorite TvShow ? ");
    q_year = new Number(readlineSync.question("What's the year of production ? "));
    howMany = new Number(readlineSync.question("How many members ? "));

    if(howMany == 1){
        let errorMsg = "Add more members";
        return errorMsg;
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
    return tvShow;
    // return q_members;
}
// console.log(askTvSerie());

function randomizeCast(tvSerie){
    tvSerie = {};
    tvSerie = askTvSerie();
    newMembers = tvShow.members;
    newArr = newMembers.sort(function(){return 0.5 - Math.random()});
    // return newArr;
    return tvSerie;
}
//console.log(randomizeCast());

function newSerie(){
    previousTVSerie = randomizeCast();
    
    nextTvSerie = {
        newName: "Super Serie",
        newYear: 2023,
        newMembers: newArr
    };

    // allSeries = {
    //     previousTVSerie : {
    //         name: q_name,
    //         year: q_year,
    //         members: q_members 
    //     },
    //     nextTvSerie : {
    //         newName: "Super Serie",
    //         newYear: 2023,
    //         newMembers: newArr
    //     }
    // };

    let serieJson = JSON.stringify(nextTvSerie, null, 2);
    return serieJson;
}
console.log(newSerie());






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

// function randomizeCast(tvSerie){
//     tvSerie = [];
//     tvSerie = askTvSerie();
//     newArr = tvSerie.sort(function(){return 0.5 - Math.random()});
//     return newArr;
// }
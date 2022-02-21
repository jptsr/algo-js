// PIZZA FLAVOR MANAGER
// Make an interactive program to manager your favorite pizza flavors. When launched it must display a menu of this style:

// Hello! Welcome to the Pizza Flavors Manager.

// Please choose your actions:

// 1 - List all the pizza flavors
// 2 - Add a new pizza flavor
// 3 - Remove a pizza flavor
// 4 - Exit this program

// Enter your action's number:
// When the user enter the number of an action he will trigger the appropriate action:

// List all the pizza flavors: Display the current list of pizza flavors. (There should be none if we just launched the program.)
// Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.
// Remove a pizza flavor: Ask the user for the number of the pizza flavor in the list he wants to remove.
// Each time one of the action has been performed it should return to the menu. (Except of course if we select to exit the program.)

// Bonus: Save the list of pizza flavors on the file system and reload it each time we launch the application.

const readlineSync = require("readline-sync");

let action;
let actionReturnMenu;
let actionRetry;
let actionExit;
let arr = ["Margherita", "Pepperoni", "Neapolitan", "Double Cheese", "California Style"];
let addFlavour;
let removeFlavour;
let jsonFile;

function chooseAction(){
    action = readlineSync.questionInt("Choose an action :" + " \n " + "1 - List all the pizza flavors" + " \n " + "2 - Add a new pizza flavor" + " \n " + "3 - Remove a pizza flavor" + " \n " + "4 - Exit the program" + " \n ");
    switch(action){
        case 1:
            displayList();
            break;
        case 2:
            newPizzaFlavour();
            break;
        case 3:
            removePizzaFlavour();
            break;
        case 4:
            exit();
            break;
        default:
            console.log("The number is incorrect, please retry.");
            chooseAction();
    }
}

function displayList(){
    console.log(arr);
    returnMenu();
}

function newPizzaFlavour(){
    addFlavour = readlineSync.question("Please enter the new flavour : ");
    // console.log(addFlavour);
    arr.push(addFlavour);
    console.log(arr);
    returnMenu();
}

function removePizzaFlavour(){
    removeFlavour = readlineSync.question("Please enter the flavour to remove : ");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === removeFlavour){
            arr.pop(removeFlavour);
            console.log(arr);
            returnMenu();
        }else{
            actionRetry = readlineSync.questionInt("You enter the wrong pizza flavour, do you want to retry (press 1 to retry) ? ");
            switch(actionRetry){
                case 1:
                    removePizzaFlavour();
                    break;
                default:
                    chooseAction();
                    break;
            }

        }
    }
}

function exit(){
    actionExit = readlineSync.questionInt("Do you want to exit the program ? Enter 1 to quit (and any other number to continue) : ");
    switch(actionExit){
        case 1:
            console.log("You exit the program.");
            break;
        default:
            chooseAction();
            break;
    }
}

function returnMenu(){
    actionReturnMenu = readlineSync.question("Press 1 to return to the menu : ");
    switch(1){
        case 1:
            chooseAction();
            break;
        default:
            console.log("You enter the wrong command please press 1.");
            returnMenu();
            break;
    }
}

// function saveJSon(){
//     let arrJSon = {
//         Flavours: arr
//     }
//     jsonFile = JSON.stringify(arrJSon, null, 2);
//     return jsonFile;
//     // jsonFile.download = "flavour.json";
//     // localStorage.root.getDirectory("", function(){
//     //     datei.moveTo(localstorage.root);
//     // });    
// }

// async function file(){
//     await window.showOpenFilePicker();
// }

// file();

// chooseAction();
// console.log(saveJSon());
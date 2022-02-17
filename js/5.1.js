// Créez une fonction nommée askTvSerie()qui demandera à l'utilisateur les données suivantes sur sa série TV préférée :
// Nom
// Année de production
// Noms des membres de la distribution (il peut y en avoir autant que l'utilisateur le souhaite)
// Cette fonction doit rassembler toutes les données dans un seul objet et le renvoyer. La structure des données doit être élégante.
// Créez un programme qui utilise cette fonction pour générer un objet de série télévisée et l'afficher à l'utilisateur au format JSON.

const readlineSync = require("readline-sync");

let q_name;
let q_year;
let howMany;
let q_member;
let q_members = [];
let tvShow = {};
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
    return jsonFile;
}
console.log(askTvSerie());
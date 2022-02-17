// Créez une fonction nommée askTvSerie()qui demandera à l'utilisateur les données suivantes sur sa série TV préférée :
// Nom
// Année de production
// Noms des membres de la distribution (il peut y en avoir autant que l'utilisateur le souhaite)
// Cette fonction doit rassembler toutes les données dans un seul objet et le renvoyer. La structure des données doit être élégante.
// Créez un programme qui utilise cette fonction pour générer un objet de série télévisée et l'afficher à l'utilisateur au format JSON.

const readlineSync = require("readline-sync");

let tvShow = {};
function collectData(){
    let q_name = readlineSync.question("What's your favorite TvShow ? ");
    let q_year = new Number(readlineSync.question("What's the year of production ? "));
    let q_members = readlineSync.question("What are the members' name ? ");

    tvShow = {
        name: q_name,
        year: q_year,
        members: q_members
    }

    let jsonFile = JSON.stringify(tvShow, null, 2);
    return jsonFile;
}
console.log(collectData());
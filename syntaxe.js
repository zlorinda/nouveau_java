/*exercise
//exercice 1
let prenom = "zorinda";
console.log(prenom);

//exercice2
let ville = "Monteal";
console.log(ville);
ville = "victoriaville";
console.log(ville);

//exercice3
let age = "17";
let nom = "zozo";
let connete = true;
console.table({ age, nom, connete });

//exercice4
const PI = "3.1416";
console.log(PI);
let circonference = 2 * PI * 4;
console.log("la circonference d'un cercle ayant un rayon de 4 cm est :" + circonference)

//exercice 5
let nomEleve = "assona";
console.log(nomEleve);
let prenomEleve = "zorinda"
console.log(prenomEleve);
let ageEleve = "17";
console.log(ageEleve);
console.log(`je m'appelle ${prenomEleve} ${nomEleve} et j'ai ${ageEleve} ans.`)
*/
//============================================================================================================
//exercice sur les condition
// exercice1
let age = 20;
if (Number.isInteger(age) && age > 0) {

    if (age >= 18) {
        console.log("Tu es majeur.");
    } else {
        console.log("Tu es mineur.");
    }

} else {
    console.log("Age invalide");
}
//exercice2

let nombre = 12;
let message = (nombre % 2 === 0) ? "pair" : "impair";
console.log(message);
//exercice3
let note = 86;
if (note >= 90) {
    console.log("Excellent");
}
else if (note >= 75) {
    console.log("Tres bien ");
}
else if (note >= 60) {
    console.log("Bien");
}
else {
    console.log("Échec");
}
//exercice 4
var temperature = 25;
if (temperature < 0) {
    console.log("il géle");
}
else if (temperature > 0 && temperature < 15) {
    console.log("il fait frais");
}
else if (temperature > 16 && temperature <= 25) {
    console.log("Tempersture agreable");
}
else {
    console.log("il fait chaut");
}
//exercice5
let connete = true;
let role = "user";

if (connect) {
    if (role === "admin") {
        console.log("Bienvenue administrateur");
    } else if (role === "user") {
        console.log("Bienvenue utilisateur");
    } else {
        console.log("Bienvenue rôle inconnu");
    }

}
else {
    console.log("Accès refusé");
}

//exercice6

let choix = "2"
switch (choix) {
    case "1":
        console.log(" c'est une Nouvelle partie");
        break;
    case "2":
        console.log("charger une partie  ");
        break;
    case "3":
        console.log("Quitter");
        break;
    default:
        console.log("Option invalide")



}

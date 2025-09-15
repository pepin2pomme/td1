/*
document.body.innerHTML += "Hello world !<br>";

let celcius = 22;
let fahrenheit = celcius * 9/5 + 32

document.body.innerHTML += "Celcius: " + celcius + " = Fahrenheit: " + fahrenheit + "<br>";

let longueur = 10;
let largeur = 5;
let aire = longueur*largeur;
document.body.innerHTML += "Longueur = " + longueur + "; Largeur = " + largeur +"; Aire du rectangle = " + aire;
*/


let ptsJoueur =0;
let ptsOrdi = 0;
let egalite = 0;

let statutRound = 0;

function miseajour(statutRound){

}

document.getElementById("boutonPierre").addEventListener("click", function () {
    let ordi = Math.floor(Math.random() * 3);
    if (ordi == 0) {egalite += 1;} else if (ordi == 1) {ptsOrdi += 1;} else {ptsJoueur += 1;}
});

document.getElementById("bontonFeuille").addEventListener("click", function () {
    let ordi = Math.floor(Math.random() * 3);
    if (ordi == 1) {egalite += 1;} else if (ordi == 2) {ptsOrdi += 1;} else {ptsJoueur += 0;}
});

document.getElementById("boutonCiseaux").addEventListener("click", function () {
    let ordi = Math.floor(Math.random() * 3);
    if (ordi == 2) {egalite += 1;} else if (ordi == 0) {ptsOrdi += 1;} else {ptsJoueur += 1;}
});
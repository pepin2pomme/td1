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
document.getElementById("statutSite").textContent = "Debut initialisation";

let ptsJoueur =0;
let ptsOrdi = 0;
let egalite = 0;

let pfc = ["Pierre", "Feuille", "Ciseaux"];

for (let i = 0; i < 3; i++) {
    document.getElementById("statutSite").textContent = "Dans boucle, bouton="+pfc[i];
    
    document.getElementById("btn"+i).addEventListener("click", function (){
        document.getElementById("affichageJoueur").textContent= pfc[i];
        let ordi = Math.floor(Math.random() * 3);
        document.getElementById("affichageOrdi").textContent= pfc[ordi];

    })

}


document.getElementById("statutSite").textContent = "Fin initialisation";

/*
function miseajour(statutRound){
    document.body.innerHTML += "<br>mise à jour...";

    if(statutRound == "egalite"){
        egalite ++;
        document.getElementById("scoreEgalite").textContent = egalite;
        document.body.innerHTML += "<br>Score mis à jour";
    }

}

document.getElementById("boutonPierre").addEventListener("click", function () {
    document.getElementById("affichageJoueur").textContent= "pierre";
    let ordi = Math.floor(Math.random() * 3);
    document.getElementById("affichageOrdi").textContent= ordi;
    
    if (ordi == 0) {miseajour("egalite")} else if (ordi == 1) {miseajour("defaite")} else {miseajour("victoire")}
    
});

document.getElementById("bontonFeuille").addEventListener("click", function () {
    document.getElementById("affichageJoueur").textContent= "feuille";
    let ordi = Math.floor(Math.random() * 3)
    document.getElementById("affichageOrdi").textContent= ordi;
});

document.getElementById("boutonCiseaux").addEventListener("click", function () {
    document.getElementById("affichageJoueur").textContent= "ciseaux";
    let ordi = Math.floor(Math.random() * 3);
    document.getElementById("affichageOrdi").textContent= ordi;
});

*/




document.getElementById("statutSite").textContent = "Debut initialisation";

let victoires = 0;
let defaites = 0;
let egalite = 0;
const pfc = ["Pierre", "Feuille", "Ciseaux"];

function comparer(joueur, ordi){
    if((joueur == 0 && ordi == 2) || (joueur == 1 && ordi == 0) || (joueur == 2 && ordi == 1)){
        update("Joueur");
    } else if(joueur == ordi){
        update("Egalité");
    } else {
        update("Ordinateur");
    }
}

function update(result){

    document.getElementById("affichageGagnant").textContent = result;

    if(result == "Joueur"){
        victoires++; document.getElementById("scoreJoueur").textContent = victoires;
    } else if (result == "Ordinateur"){
        defaites++; document.getElementById("scoreDefaite").textContent = defaites;
    } else {
        egalite++; document.getElementById("scoreEgalite").textContent = egalite;
    }
}

function reset(){
    location.reload();
}




for (let i = 0; i < 3; i++) {
    document.getElementById("statutSite").textContent = "Dans boucle, bouton="+pfc[i];
    
    document.getElementById("btn"+i).addEventListener("click", function (){
        document.getElementById("affichageJoueur").textContent= pfc[i];
        let ordi = Math.floor(Math.random() * 3);
        document.getElementById("affichageOrdi").textContent= pfc[ordi];

        comparer(i, ordi);
    })

}

document.getElementById("statutSite").textContent = "Fin initialisation";
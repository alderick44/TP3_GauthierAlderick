const texteGauche = document.getElementById('texte-gauche');
const texteDroite = document.getElementById('texte-droite');

const hauteurTexteGauche = texteGauche.offsetHeight;
const hauteurTexteDroite = texteDroite.offsetHeight;

console.log("Hauteur texte de gauche: " + hauteurTexteGauche);
console.log("Hauteur texte de droite: " + hauteurTexteDroite);

if (hauteurTexteGauche > hauteurTexteDroite) {
texteDroite.style.height = hauteurTexteGauche + "px";
console.log("Nouvelle hauteur droite: " + texteDroite.style.height);
}
else if (hauteurTexteGauche < hauteurTexteDroite) {
    texteGauche.style.height = hauteurTexteDroite + "px";
    console.log("Nouvelle hauteur gauche: " + texteGauche.style.height);
}

let btnPanier = document.getElementsByClassName("btn-panier");
let panier = parseInt(document.getElementById("panier").textContent);
function ajouterAuPanier() {
    panier = panier + 1;
    document.getElementById("panier").textContent = panier;
    console.log("Panier: " + panier);
}
for (let i = 0; i < btnPanier.length; i++) {
    btnPanier[i].addEventListener("click", () => {ajouterAuPanier();});
}

let ensembleGauche = document.getElementById("ensemble-gauche");
ensembleGauche.addEventListener("mouseover", () => changerLeBackgroundGauche());
function changerLeBackgroundGauche() {
    ensembleGauche.style.backgroundColor = "rgba(125, 170, 210, 0.101)";
    console.log("Changer le background (ensemble de gauche)")
}
ensembleGauche.addEventListener("mouseout", () => revertBackgroundGauche());
function revertBackgroundGauche() {
    ensembleGauche.style.backgroundColor = "white";
    console.log("Reverted background")
}

let ensembleDroite = document.getElementById("ensemble-droite");
ensembleDroite.addEventListener("mouseover", () => changerLeBackgroundDroite());
function changerLeBackgroundDroite() {
    ensembleDroite.style.backgroundColor = "rgba(125, 170, 210, 0.101)";
    console.log("Changer le background (ensemble de droite)")
}
ensembleDroite.addEventListener("mouseout", () => revertBackgroundDroite());
function revertBackgroundDroite() {
    ensembleDroite.style.backgroundColor = "white";
    console.log("Reverted background")
}

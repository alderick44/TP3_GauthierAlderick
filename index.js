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
/*--------------------------------------------------------------------------------------------*/
let btnPanier = document.getElementsByClassName("btn-panier");
let panier = parseInt(document.getElementById("panier").textContent);
for (let i = 0; i < btnPanier.length; i++) {
    btnPanier[i].addEventListener("click", () => {ajouterAuPanier();});
}
function ajouterAuPanier() {
    panier = panier + 1;
    document.getElementById("panier").textContent = panier;
    console.log("Panier: " + panier);
    afficherHeader();
}
function afficherHeader(){
    enregistrerScrollUtilisateur();
}
/*--------------------------------------------------------------------------------------------*/
let ensembleGauche = document.getElementById("ensemble-gauche");
ensembleGauche.addEventListener("mouseover", () => changerLeBackgroundGauche());
function changerLeBackgroundGauche() {
    ensembleGauche.style.backgroundColor = "#f1f1ffff";
    console.log("Changer le background (ensemble de gauche)")
}
ensembleGauche.addEventListener("mouseout", () => revertBackgroundGauche());
function revertBackgroundGauche() {
    ensembleGauche.style.backgroundColor = "#F7F7FF";
    console.log("Reverted background")
}
let ensembleDroite = document.getElementById("ensemble-droite");
ensembleDroite.addEventListener("mouseover", () => changerLeBackgroundDroite());
function changerLeBackgroundDroite() {
    ensembleDroite.style.backgroundColor = "#f1f1ffff";
    console.log("Changer le background (ensemble de droite)")
}
ensembleDroite.addEventListener("mouseout", () => revertBackgroundDroite());
function revertBackgroundDroite() {
    ensembleDroite.style.backgroundColor = "#F7F7FF";
    console.log("Reverted background")
}
/*--------------------------------------------------------------------------------------------*/
let compteurScroll = 0;
let valeurDuDernierScroll = 0;
let headerStaticCheck = true;
window.addEventListener("scroll", () => enregistrerScrollUtilisateur());
function enregistrerScrollUtilisateur(){
    rendreHeaderSticky();
    compteurScroll = compteurScroll + 1;
    if (compteurScroll % 10 == 0){
        console.log("Scroll : " + compteurScroll);
    }
    if (headerStaticCheck == true){
    setTimeout(enregistrerDernierScroll, 1500);
    headerStaticCheck = false;
    }
}
function enregistrerDernierScroll() {
    valeurDuDernierScroll = compteurScroll;
    attendreQueUtilisateurNeScrollPas();
}
function attendreQueUtilisateurNeScrollPas() {
    console.log(compteurScroll + " L'utilisateur scroll t-il?");
    setTimeout(verifierScroll,1000);
}
function verifierScroll(){
    if (valeurDuDernierScroll == compteurScroll){
        console.log("L'utilisateur ne scroll pas : Header Static");
        rendreHeaderStatic();
    } else {
        enregistrerDernierScroll();
        console.log("L'utilisateur a scroll, réessayer ");
    }
}
function rendreHeaderStatic(){
    document.getElementById("header").style.position = "static";
    document.getElementById("header").style.top = "0";
    headerStaticCheck = true;
}
function rendreHeaderSticky(){
    document.getElementById("header").style.position = "sticky";
    document.getElementById("header").style.top = "0";
}
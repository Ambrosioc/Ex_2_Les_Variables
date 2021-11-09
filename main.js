// Exercice 2 : Afficher les variable
// Le bute de l'exercice est de trouver une solution pour afficher les variables avec le genre(H/F)
// Ne pas oublié de verifier avec la commande "node main.js" dans le terminal


var nom = "Ambro"; // On assigne la variables nom par une chaine de caratere
var age = 29; // On assigne l'age avec un entier
var man = true; // On assigne la variable avec un booléen (true/false)


console.log("Nom : " + nom); // Affichage sur la console
console.log("Age : " + age); // Affichage sur la console

if(man === true){ // Ici
    console.log("Sexe : Homme");
}else{
    console.log("Sexe : Femme")
};


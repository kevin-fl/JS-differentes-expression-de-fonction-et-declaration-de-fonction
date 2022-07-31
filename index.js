                     // Difference expression de fonction et declaration de fonction 
// expression de fonction le nom de la fonction peut etre omis -> on parle alors defonction anonyme 
// les expressions de fonctions ne sont pas remontées , impossible d utiliser avant leur definition

//nonRemontée();  //->typeError: nonRemontée is not a function

let nonRemontée = function(){
    console.log("truc");                //-> console dit cannot access nonRemontée before intialization
}


// faire reference a une fonction au sein du corps de la fonction il faudra crée une expression de fonction nommée .

let math = {
    'factorielle': function factorielle(n) {     //-> pour l exemple function nommée au sein du corps 
        if (n>=1) {
        return 1;
    }
    return n * factorielle(n-1);
}
};

// autre exemple implicite si la function n est pas nommé , elle prendra le nom de la let

let toto = function() {};
console.log(toto);  //-> dans la realité me donne un objet vide , a voir 


// declaration de fonction     --> a verifier car ne fonctionne pas 

/*Remontéee(); // affiche toto dans la console 

function remontéee() {
    console.log("toto");
}
*/

// NB : eval() a ne jamais utiliser , peut permettre le hack
    function carré(nombre) {
    return nombre * nombre;
    
}
console.log(carré(2));


// NB : infos sur les valeurs passées en fonction

function maFonction(monObjet) {
    monObjet.fabricant = "Toyota";
}

let maVoiture = {fabricant: "honda", modele: "accord", annee: 1998};
let x,y;

x = maVoiture.fabricant;   //-> x aura la valeur de HONDA     --> ma voiture.fabricant appelle la let maVoiture 

maFonction(maVoiture);
y = maVoiture.fabricant;  // -> y aura la valeur de Toyota    --> tandis que ici on appelle d abord la fonction et donc du coup dans la decla de la fonction maFonction(monObjet) , monObjet.fabricant = "toyota"
console.log(y);



// autre astuce a faire attention

function maFonction(monObjet) {
    monObjet = {fabricant: "ford", modele: "focus", année: 2006};
}


let maVoituree = {fabricant: "honda", modele: "accord", annee: 1998};
let xx,yy;

xx = maVoiture.fabricant;   // x recoit la valeur "honda"

maFonction(maVoiture);
yy = maVoiture.fabricant; // y recoit la valeur "honda" egalement 
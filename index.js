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

// NB hors contexte : eval() a ne jamais utiliser , peut permettre le hack

    function carré(nombre) {
    return nombre * nombre;
    
}
console.log(carré(2)); // 4


// on aurait pu l ecrire comme ceci aussi , expression de fonction 

let carréé = function(nombre) {
    return nombre * nombre
};
let xxx = carréé(4);
console.log(xxx);

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



// les expressions de fonction sont pratiques pour passer une fonction comme argument d une autre fonction . 
//dans l ex qui suit , la fonction map est dfinie et appelée avec une fonction anonyme comme premier argument : 

function map(f,a) {
    let resultat = [];
    for (let i =0 ; i != a.length ; i++ )
    resultat[i]= f(a[i]);
    return resultat;
}


// une expression de fonction

let cube = function(x) {return x*x*x}; //-> une expression de fonction
map(cube, [0,1,78,15,153]);
console.log(map(cube,[0,1,78,15,153]));  // ->(5) [0, 1, 474552, 3375, 3581577]




// en JS , une fonction peut etre definie selon une condition

let maFFonction;
if(num ===0){
    maFFonction = function(monObjett) {
        monObjett.fabricant = "toyota"
    }
   
}
//?????????? recheck 11:00 js 43


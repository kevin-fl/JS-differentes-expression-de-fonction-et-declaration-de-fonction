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
/*
let maFFonction;
if(num ===0){
    maFFonction = function(monObjett) {
        monObjett.fabricant = "toyota"
        console.log(monObjett.fabricant = "toyota");
    }

};
//?????????? recheck 11:00 js 43

*/
//*NB:a savoir la def d une methode :  une methode est une fonction etant une propriete d un objet 

carré(5);
console.log(carré(5));



                                                        // LA RECURSIVITE
                                                       // https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions --> pour plus de comprehension

// une fonction peut faire reference a elle meme et s appeler elle-meme.est semblable a une boucle. 3 moyens :
/*
1.le nom de la fonction
2.arguments.callee
3.une variable de la portée qui fait reference a la fonction


exemple
 let toto = function truc() {

 };

1. truc()
2.arguments.callee()
3.toto()


exemple fonction recursive:
*/
function boucle(x) {
    if (x >=10)  //-> x>=10 represente la condition d arret
    return;
    // faire qqch
    boucle(x+1); // appel recursif
}  
boucle(0);

 
//autre exemple récupérer l'ensemble des nœuds d'un arbre (le DOM par exemple) se fait plus simplement en utilisant la récursivité :

function parcourirArbre(noeud) {
    if (noeud === null)
    return;

    for (var i=0; i<noeud.childNodes.length; i++) {
        parcourirArbre(noeud.childNodes[i]);
    }
}

//Contrairement à l'exemple précédent avec la fonction boucle, ici, chaque appel récursif entraîne lui-même plusieurs appels (et non un seul).





//*FONCTION IMBRIQUEES ET FERMETURES(CLOSURE)

/*En résumé :

La fonction imbriquée ne peut être utilisée qu'à partir des instructions de la fonction parente.
La fonction imbriquée forme une fermeture : elle peut utiliser les arguments et les variables de la fonction parente. En revanche, la fonction parente ne peut pas utiliser les arguments et les variables de la fonction fille.
*/


//La fonction interne étant une fermeture, on peut appeler la fonction parente afin de définir les arguments pour la fonction englobante et ceux de la fonction fille :

function parente(x) {
    function fille(y) {
      return x + y;
    }
    return fille;
  }
  fn_fille = parente(3); // Fournit une fonction qui ajoute 3 à ce qu'on lui donnera
  résultat = fn_fille(5); // renvoie 8
  
  résultat1 = parente(3)(5); // renvoie 8

                                                            //IMBRIQUER DES FONCTIONS 

/*

Il est possible d'imbriquer des fonctions sur plus de deux niveaux, par exemple, on peut avoir une fonction A qui contient une fonction B 
qui contient une fonction C. Les fonctions B et C sont des fermetures et B peut accéder à la portée de A, C peut accéder à la portée de B.
 Ainsi, C accède à la portée de B qui lui accède à la portée de A, C accède donc à la portée de A (transitivité).
Les fermetures peuvent donc contenir plusieurs portées, c'est ce qu'on appelle le chaînage de portées.

Par exemple :
*/

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // affichera 6 (1 + 2 + 3)

/*
Dans cet exemple C accède au y de B et au x de A. Ceci est rendu possible car :

B est une fermeture qui contient A, autrement dit B peut accéder aux arguments et aux variables de A.
C est une fermeture qui contient B.
La fermeture de B contient A donc la fermeture de C contient A, C peut ainsi accéder aux arguments et aux variables de B et A. On dit que C chaîne les portées de B et de A (dans cet ordre).
La réciproque n'est pas vraie. A ne peut pas accéder à C, car A ne peut pas accéder aux arguments ou aux variables de B, or C est une variable de B. De cette façon, C reste privée en dehors de B.

                                                                    //NOMMAGE


Lorsque deux arguments ou variables des portées d'une fermeture ont le même nom, il y a un conflit de noms. Dans ces cas, ce sera la portée la plus imbriquée qui prendra la priorité sur le nom, la portée la plus « externe » aura la priorité la plus faible pour les noms de variables. Du point de vue de la chaîne des portées, la première portée sur la chaîne est la portée la plus imbriquée et la dernière est la portée située le plus à l'extérieur :
*/
function externe() {
  var x = 10;
  function interne(x) {
    return x;
  }
  return interne;
}
résultat = externe()(20); // renvoie 20 et pas 10



                                                        // LES CLOSURES

// une fermeture donne acces a la portee d une fonction externe a partir d une fonction interne ("on dit que la fonction capture son environnement")
//en js , une fermeture est créee chaque fois qu une fonction est créee.



var animal = function(nom) {   // La fonction externe utilise un paramètre "nom"
  var getNom = function () {
    return nom;                // La fonction interne accède à la variable "nom" de la fonction externe
  }
  return getNom;               // Renvoie la fonction interne pour la rendre disponible en dehors de la portée de la fonction parente
}

monAnimal = animal("Licorne");

monAnimal();                   // Renvoie "Licorne"

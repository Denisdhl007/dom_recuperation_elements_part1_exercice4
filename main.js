// // # Instructions :
// // >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précisée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// // >*Cherche des methodes pour résoudre les énoncés suivants :*


// // // ### 1. Affiche le contenu textuel du second h1

let h1 = document.getElementsByTagName("h1");
console.log(h1[1].innerHTML);

// // // ### 2. Affiche le contenu textuel du dernier li de la liste ul

let ul = document.getElementsByTagName('ul')[0];
let li = ul.getElementsByTagName('li')[ul.getElementsByTagName('li').length - 1];
let text = li.innerHTML;
alert(text);

// // ### 3. Affiche le contenu textuel du premier p en majuscule

let p = document.getElementsByTagName('p')[0];
let text = p.innerHTML;
alert(text.toUpperCase());

// // ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, et affiche chaque li en majuscule

var ul = document.getElementsByTagName('ul')[0];
var li = ul.getElementsByTagName('li');
for (var i = 0; i < 4; i++) {
  var text = li[i].innerHTML;
  alert(text);
  alert(text.toUpperCase());
}
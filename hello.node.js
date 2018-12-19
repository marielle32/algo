/**
 * @name hello.Node
 * @desc juste pour les algorithmes
 * @author Aélion - Dec. 2018
 * @version 1.0.0
 */
 /**
  * Retourne la valeur maximum entre deux valeurs
  * @param {*} currentMax Valeur maximum courante
  * @param {*} currentMin Valeur minimum courante
  * @param {*} value Valeur dans le tableau
  * @return number La valeur la plus élevée entre currentValue et value
  */
 function min(currentMin, value) {
     if (value < currentMin) {
         return value;
     } else {
     return currentMin;
     }
 }

 function max(currentMax, value) {
     console.log('compare ' + currentMax + ' à ' + value)
    if (value > currentMax) {
        return value;
    } else {
    return currentMax;
    }
}
function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return max(current, value);
    }
    return min(current, value);
}


console.log('Hello world from NodeJS');

//creation d'une variable de type tableau
/**
 * @var array
 * Tableau de nombre entier
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];
/**
 * @var number
 * somme des valeurs du tableau
 */
let total = 0;
/**
 * *@var number
 * valeur max
 */
let maxIs = tablo[0];
let minIs = tablo[0];

// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; i++) {
    if (tablo[i] % 2 == 0) {
        console.log('Indice ' + i + ' est pair ' + tablo[i]);
    } else {
        console.log(tablo[i] + ' est impair');
    }

    total = total + tablo[i];

    if (i > 0) {
        maxIs = minOrMax(maxIs, tablo[i]);
        minIs = minOrMax(minIs, tablo[i], false);
    }
        
}
console.log ('le total est ' + total);
console.log ('le  max est ' + maxIs);
console.log ('le  min est ' + minIs);

//console.log('le maximum est ' + maxi);
    
// Si l'indice est superieur à 0, controler la valeur maximum
let tabloFinal=[];
let indice=0;

while (tablo.length > 0) {
    let minIs = tablo[0];
    for (let i = 0; i< tablo.length; i++) {
        if (tablo[i] <= minIs) {
            minIs = tablo[i];
            indice=i;
        }
    }
tabloFinal.push(minIs);
tablo.splice(indice, 1);
}    
  

console.log('Résultat : ' + tabloFinal);

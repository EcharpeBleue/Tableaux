function isCroissantOuPas(tableau) {
for (let index = 1; index < tableau.length; index++) {
    if (tableau[index]>tableau[index-1]) {
        return true;
    }
    return false;
}
}

let tableauPremier=[1,3,5,7,9];
let tableauSecond=[8,4,10,12];
console.log(isCroissantOuPas(tableauPremier));
console.log(isCroissantOuPas(tableauSecond));
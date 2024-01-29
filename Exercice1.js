function tableauEntier(tableauEntierlength, tableauEntiers) {
    for (let index = 0; index < tableauEntierlength; index++) {
       tableauEntiers.push(parseInt(prompt('Rentrez un chiffre ou un nombre souhaité')));
    }
    return tableauEntiers;
}

function tableauEntierSomme(tableauEntiers){
    let tableauSomme = 0;
    for (let index = 0; index < tableauEntiers.length; index++) {
        tableauSomme += tableauEntiers[index];
    }
    return tableauSomme;
}

let tableauEntierlength = parseInt(prompt('Combien de nombres voulez-vous rentrer ?'));
let tableauEntiers = new Array();

tableauEntier(tableauEntierlength, tableauEntiers);
let somme = tableauEntierSomme(tableauEntierlength, tableauEntiers);
console.log(somme);
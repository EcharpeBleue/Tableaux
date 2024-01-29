// function filterAnnées(anneeChoisie) {
//     let filmsRetenus=anneeChoisie.filter(1996)
//     return filmsRetenus
// }

let filmsNanards=[
    {Titre:"La vieille mèmère", Année: 1995},
    {Titre:"Le chien a Tutu", Année: 1996},
    {Titre:"La soeur a Dodo", Année: 1997},
    {Titre:"Pourquoi la Terre est plate", Année: 1995},
    {Titre:"Le journal de CNews", Année: 1996},
    {Titre:"Les Bronzés en Terre Sainte", Année: 1997}
];


// let anneeChoisie = "";
let filmsRetenus="";
filmsRetenus = filmsNanards.filter(film => film.Année === 1997);
// filterAnnées(anneeChoisie)
filmsRetenus.forEach(film => {
    console.log(film.Titre+' '+film.Année);
});


// delete filmsNanards[0];
// filmsNanards.push("Les bronzés en terre sainte");
// console.log(filmsNanards);
// for (let index = 0; index < filmsNanards.length; index++) {
//     console.log(filmsNanards[index]);
// }
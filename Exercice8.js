let filmsNanards=[
    {Titre:"La vieille mèmère", Annee: 1995, note:4},
    {Titre:"Le chien a Tutu", Annee: 1996, note:8},
    {Titre:"La soeur a Dodo", Annee: 1997, note:1},
    {Titre:"Pourquoi la Terre est plate", Annee: 1995, note:5},
    {Titre:"Le journal de CNews", Annee: 1996, note:9},
    {Titre:"Les Bronzés en Terre Sainte", Annee: 1997, note:10}
];
let tableauFilmNote=[];
filmsNanards.forEach(film => {
    tableauFilmNote.push(film.note)
});

let total=tableauEntierSomme(tableauFilmNote)
console.log(total);
let moyenne=total/filmsNanards.length;
console.log(moyenne);

let filmNanardsSorted = filmsNanards.toSorted((a, b) => a.note + b.note);
console.log(filmNanardsSorted[0]);

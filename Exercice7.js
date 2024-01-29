let filmsNanards=[
    {Titre:"La vieille mèmère", Annee: 1995},
    {Titre:"Le chien a Tutu", Annee: 1996},
    {Titre:"La soeur a Dodo", Annee: 1997},
    {Titre:"Pourquoi la Terre est plate", Annee: 1995},
    {Titre:"Le journal de CNews", Annee: 1996},
    {Titre:"Les Bronzés en Terre Sainte", Annee: 1997}
];

// Pour classer par années :
filmsNanards.sort((a, b) => a.Annee - b.Annee);
// Pour classer par Titres :
filmsNanards.sort((a, b) => a.Titre.localeCompare(b.Titre));
console.table(filmsNanards)
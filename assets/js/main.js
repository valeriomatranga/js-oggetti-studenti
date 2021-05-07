//creare un oggetto che descriva uno studente

var studente = {
    nome: " valerio",
    cognome: " matranga",
    eta: 32
}
console.log(studente);

//stampare a schermo con ciclo for tutte le proprieta dell'ogetto

for( var key in studente){
    console.log(studente[key]);
    document.getElementById("studente").innerHTML += studente[key];
}

//creare un array di oggetti studenti

var studenti = [
    {
        nome: "filippo",
        cognome:"rossi",
        eta: 25
    },

    {
        nome:"marco",
        cognome:"sieni",
        eta: 34
    },

    {
        nome:"federico",
        cognome:"biaggio",
        eta: 35
    }
];

// ciclare su tutti gli studenti e stampare per ogniuno di essi nome e cognome

var sectionEl = document.getElementById("lista");

for( var key in studenti){
    console.log(studenti[key]);
    sectionEl.insertAdjacentHTML('beforeend',
     `
        <p> ${key}: ${studenti[key]} </p>
    `)
}
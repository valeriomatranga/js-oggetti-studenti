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


//opzione 1:
/* var sectionEl = document.getElementById("lista");

for(var i = 0; i < studenti.length; i++){

    var classe = studenti[i];

    for( var key in classe){
        console.log(classe[key]);
        sectionEl.insertAdjacentHTML('beforeend',
        `
            <p> ${key}: ${classe[key]} </p>
        `)
    }
}     */

//opzione 2:

for( var key  in studenti){
    var fullName = `${studenti[key].nome}  ${studenti[key].cognome}`
    document.getElementById('lista').innerHTML += fullName;
}

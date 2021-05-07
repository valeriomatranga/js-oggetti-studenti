//creare un oggetto che descriva uno studente
var studente = {
    nome: "Valerio",
    cognome: " " + "Matranga",
    eta:" " + 32,
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
        nome: "Filippo",
        cognome:"Rossi",
        eta: 25
    },

    {
        nome:"Marco",
        cognome:"Sieni",
        eta: 34
    },

    {
        nome:"Federico",
        cognome:"Biaggio",
        eta: 35
    }
];


//Dare la possibilità all’utente, attraverso 3 prompt(),
//di aggiungere un nuovo oggetto studente inserendo nell’ordine:
//nome, cognome e età.
var nome = prompt("Inseriscio il tuo nome!");
var cognome = prompt("Inseriscio il tuo cogome!");    
var eta = Number(prompt("Inseriscio la tua eta!"));

var dati = {
    nome,
    cognome,
    eta,
}

studenti.push(dati);



// ciclare su tutti gli studenti e stampare per ogniuno di essi nome e cognome

//opzione 1:
for( var key  in studenti){
    var fullName = `${studenti[key].nome}  ${studenti[key].cognome}`
    document.getElementById('lista').innerHTML += fullName + '<br>';
}


//opzione 2:
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
}    
*/

console.log(studenti);
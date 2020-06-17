// Il programma dovrà permettere l'inserimento del nome del passeggero, dei chilometri che vuole percorrere e la selezione di una categoria (over65, minorenne, maggiorenne).
// Sulla base di queste informazioni dovrà:
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// (Come esercizio precedente)
// Dovrà creare un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Un minimo di animazione alla pagina sarà data dal biglietto che compare al click del bottone "Crea" e scompare al click del bottone "Annulla", se annullato il biglietto ripulire i campi del form.

// VARIABILI GENERALI

var prezzoBiglietto;
var inviaBtn = document.getElementById('btn-invia');
var annullaBtn = document.getElementById('btn-annulla');

// PRENDERE INPUT NOME KM ETA AL CLIC
inviaBtn.addEventListener('click', function () {
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var eta = document.getElementById('fascia-eta').value;

  // CALCOLARE PREZZO STANDARD
  prezzoBiglietto = (km * 0.21);
  // ASSEGNARE EVENTUALE SCONTO MINORENNI
  if (eta == "Minorenne") {
  prezzoBiglietto = (prezzoBiglietto / 100*80);
  }
  //  ASSEGNARE EVENTUALE SCONTO ANZIANI
  else if (eta == "Over65") {
    prezzoBiglietto = (prezzoBiglietto / 100*60);
  }
  // ARROTONDARE A CENTESIMI
  prezzoBiglietto = prezzoBiglietto.toFixed(2);

   // ASSEGNARE NUMERI RANDOM A TRENO E VAGONE

   var codiceTreno = Math.floor(Math.random()*(100000-90000) + 90000);
   var numeroCarrozza = Math.floor(Math.random()*(15-1) + 1);

   // INVIARE OUTPUT SU TICKET + RENDERLO VISIBILE

  document.getElementById('nome-biglietto').innerHTML = nome;
  document.getElementById('codice-treno').innerHTML = codiceTreno;
  document.getElementById('numero-carrozza').innerHTML = numeroCarrozza;
  document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto + " €";
  document.getElementById('fascia-biglietto').innerHTML = eta;

  document.getElementById('ticket').className = "show";
});

// ANNULLARE INPUT AL click + RENDERLO INVISIBILE
annullaBtn.addEventListener('click', function () {
  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('fascia-eta').value = "Adulto";

  document.getElementById('ticket').className = "hidden";
})

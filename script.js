/*  Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const userChoiceKm = Number(prompt("Scegli quanti Km devi percorrere per raggiungere la tua destinazione [es.1,2,3...]"));
console.log(userChoiceKm);

const userChoiceAge = Number(prompt("Inserisci la tua età [es.15,28,40, 55..."));
console.log(userChoiceAge);

const price = 0.21;
const triPrice = userChoiceKm * price;
console.log(triPrice);

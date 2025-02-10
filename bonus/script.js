/*pari/dispari:
completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  
Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili.*/

const userChoice = prompt("Scegli pari o dispari, esempio [pari o dispari]");
console.log(userChoice);

const userNumber = Number(prompt("inserisci numero da 1 a 9, esempio [1,2,3...9]"));
console.log(userNumber)

const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(alert(`il pc dice ${pcNumber}`));

const total = userNumber + pcNumber;
console.log(total);

let result = '';

if (total % 2 === 0) {
    console.log(total + " è un numero pari")
    result = "pari";
} else {
    console.log(total + " è un numero dispari.");
    result = "dispari";
}

if (result == userChoice) {
    console.log(alert(`il risultato è ${total}, hai vinto!`));


} else {
    console.log(alert(`il risultato è ${total}, hai perso!`));
}

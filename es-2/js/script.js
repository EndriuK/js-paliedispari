// CHIEDO ALL'UTENTE DI SCEGLIERE "PARI" O "DISPARI"
let pariDispari = prompt('Scegli "pari o dispari"');

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO DA 1 A 5
let numeroUser = parseInt(prompt("Scegli un numero da 1 a 5"));

// GENERO UN NUMERO CASUALE PER IL COMPUTER
let numbAI = numeroComputer();

// CALCOLO LA SOMMA DEI NUMERI
let somma = numeroUser + numbAI;

// STAMPO IL NUMERO DEL COMPUTER E LA SOMMA IN CONSOLE
console.log("Numero PC: " + numbAI);
console.log("Somma: " + somma);

// INIZIALIZZO LA VARIABILE PER VERIFICARE SE LA SOMMA È PARI
let numeroPari = true;

// ESEGUO LA COMPARAZIONE PER VERIFICARE SE LA SOMMA È PARI O DISPARI
comparazione();

// VERIFICO SE L'UTENTE HA VINTO O SE HA VINTO IL COMPUTER
if (
  (pariDispari === "pari" && numeroPari === true) ||
  (pariDispari === "dispari" && numeroPari === false)
) {
  alert("Hai vinto");
} else {
  alert("Ha vinto il PC!");
}

// FUNZIONE PER GENERARE UN NUMERO CASUALE TRA 1 E 5 PER IL COMPUTER
function numeroComputer() {
  return Math.floor(Math.random() * 5) + 1;
}

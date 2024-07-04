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

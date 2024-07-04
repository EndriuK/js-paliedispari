// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
let parola = prompt("Inserisci parola");

// VARIABILE PER PAROLA INVERTITA
let reverse;

// FUNZIONE PER INVERTIRE LA PAROLA
function reverseString(parola) {
  reverse = parola.split("").reverse().join("");
}

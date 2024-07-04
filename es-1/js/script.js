// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
let parola = prompt("Inserisci parola");

// VARIABILE PER PAROLA INVERTITA
let reverse;

// FUNZIONE PER INVERTIRE LA PAROLA
function reverseString(parola) {
  reverse = parola.split("").reverse().join("");
}

// INVERTO LA PAROLA INSERITA DALL'UTENTE
reverseString(parola);

// VERIFICO SE LA PAROLA E' PALINDROMA
if (parola === reverse) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}

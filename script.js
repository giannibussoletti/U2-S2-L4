// Recap JS
// VIA!
let variabile = "ciao"
const nonCambia = 100
// in i valori delle variabili si dividono in PRIMITIVI e COMPLESSI
// tipi primitivi sono:
// - numeri
// - stringhe
// - numeri
// - stringhe
// - booleani
// - undefined
// - null

// tipi complessi sono:
// - array
// -oggetti

// OGGETTI
// un oggetto è un valore complesso per un dato
// che racchiude in un unica entita diverse caratteristiche o proprietà definite da una COPPIA chiave:valore
// di solito un oggetto si dichiara con const pet ottimizzare la memoria, questo non preclude
// la capacità di poter manipolare o modificare l'oggetto

const dog = {
  // qui dentro inseriamo tutte le caratteristiche del cane, sotto forma di COPPIE chiave:valore
  name: "Poldo",
  age: 5,
  color: "black",
  skills: ["play", "sleep", "eat"],
}
// dog è un oggetto adesso, e posso recuperarne i singoli VALORI utilizzando le CHIAVI
// ad esempio per recuperare l'età (5) mi riconduco alla sua chiave ("age")
// a) dot notation
dog.age // 5
// b) square brackets, utilizzata in caso di nomi complessi con simboli particolari o se non conosciamo i valore dell'oggetto
dog["age"]

dog.mood = "playful" // ho aggiunto una proprietà all'oggetto creando una nuova chiave valore
delete dog.color // Si elimina la singola proprietà dell'oggetto
dog.color // restituisce undefined perché è stata cancellata

// ARRAY
// è anchje lui una forma complessa in js, e può contenere infiniti elementi
// ogni elemento si differenzia dagli altri per la sua posizione.
// Anche gli ARRAy si dichiaramo solitamente con la parola "const", e di solito
// un array contiene elementi tutti dello stesso tipo.

const colors = ["red", "yellow", "blue", "white"]
//////////////[    0      1       2        3   ]
// gli array in JS sono zero-based indexed

// il primo elemento di qualsiasi array in JS ha SEMPRE posizione
// ogni array in JS è dotato di una proprietà chiamata LENGTH che numericamente riassume quanti elementi contiene
colors.length // 4
// l'ultimo elemento di qualsias array in JS ha SEMPRE posizione length

//  Gli ARRAY permettono anche esse di cambiare/aggiungere/eliminare elementi al oro interno, tramite dei metodi predefiniti
colors.push("blue") // aggiunge alla fine
colors.pop() // elimina alla fine
colors.unshift("purple") // aggiunge all'inizio
colors.shift() // elimina all'inizio
colors.sp1ice(2, 0, "orange") // posizione di inizio, n. di elementi da eliminare, eventuali elementi da agg.

// CICLI
// un ciclo è una struttura capace di ripetere una serie di operazioni un numero:
// - PREDEFINITO di volte
// - NON PREDEFINITO di volte

// il ciclo per eccellenza nelle operazioni di tipo a) è il ciclo WHILE
// il ciclo per eccellenza nelle operazioni di tipo b) è il ciclo FOR
// a)
let risultato = 0
// se 1a condizione iniziale del ciclo while è true, entriamo nel ciclo
while (risultato < 5) {
  const lancio = Math.ceil(Math.random() * 6) // lancio del D6
  risultato = lancio
}
// finite le operazioni nel ciclo, 1a condizione iniziale viene ri-valutata e se restituisce ancora true, il ciclo
// variazione: do-while - > il ciclo comincia a PRESCINDERE, non c'è bisogno che 1a condizione risultato < 5 sia
// verificata in partenza (infatti viene verificata solo alla fine per RIPETERE il ciclo)
do {
  // faccio cose
  const lancio = Math.cei1(Math.random() * 6) // lancio del D6
  risultato = lancio
} while (risultato < 5)
// ora risultato è sicuramente 0 5 o 6

// b)
for (let i = 0; i < 10; i++) {
  // queste istruzioni verranno ripetute 10 volte: questo perchè la i parte da 0 e assumerà un valore valido
  // fino al raggiungimento dell 'ultimo valore minore di 10, ovvero 9; da 0-9 corrono 10 iterazioni.
  console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  --> 10 console.log totali
}
// -- > il ciclo FOR è perfetto per esplorare gli array, perchè se sfruttiamo 1a length di un array come
// punto di arrivo per il valore di i otteniamo sempre INDICI VALIDI per l'esplorazione dell'array!

const moreColors = ["tangerine", "blue", "indigo", "limegreen", "pink"]

for (let i = 0; i < moreColors.length; i++) {
  // i vale: 0, 1, 2, 3, 4 etc.
  // moreColors[i] vale: "tangerine", "blue", "indigo", "limegreen", "pink"
}

// oggi gli array arrivano con dei metodi INTEGRATI per le loro iterazioni/esplorazioni
// forEach, map, filter, reduce

// forEach è un metodo intregrato in ogni array serve per eseguire un'operazione tot volte, avendo
// a disposizione un elemento dell'array alla volta
moreColors.forEach(function (colors, i) {
  // Le operazione qui dentro verranno ripetute per il numero degli elementi dell'array
  console.log("ciao") // verrà stampato 5 volte "ciao"
  console.log(color) // uno degli elementi dell'array
  // color è come dire moreColors[i] in un ciclo for
  // il secondo elmento rappresenta invece l'index quindi ha un valore numerico
})

// map a differenza di forEach ritorna un nuovo array
const x = moreColors.map((color, i) => {
  // map è un metodo che serve a TRASFORMARE un array iniziale in un NUOVO ARRAY (senza toccare l'originale)
  // magari vogliamo cambiare qualcosa in una stringa o dobbiamo sommare un numero fisso a tutti gli elementi di un array di numeri
  return color.toUpperCase
})

// x ora è un array di 5 colori ma ogni colore è MAIUSCOLO
// x ora è uguale a ["TANGERINE", "BLUE", "INDIGO", "LIMEGREEN", "PINK"]

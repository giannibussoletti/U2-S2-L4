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
colors.splice(2, 0, "orange") // posizione di inizio, n. di elementi da eliminare, eventuali elementi da agg.

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
  const lancio = Math.ceil(Math.random() * 6) // lancio del D6
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
  console.log(colors) // uno degli elementi dell'array
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

const names = ["giulio", "gianni", "ferdinando"]

// ora da questo array voglio creare un array di OGGETTI, in cui ogni oggetto è
// il nome della persona + il suo numero preferito

const charaters = names.map((nome) => {
  return {
    name: nome,
    favoriteNumber: Math.ceil(Math.random() * 10),
  }
})
// charaters sarà questo dopo il map
// [
//   ({
//     name: "giulio",
//     favoriteNumber: 5,
//   },
//   {
//     name: "gianni",
//     favoriteNumber: 7,
//   },
//   {
//     name: "ferdinando",
//     favoriteNumber: 4,
//   })
// ]

// il metodo filter invece permette di restituire un nuovo array in cui gli elementi NON sono modificati,
// ma in cui possiamo avere MENO elementi dell 'originale

const nameConG = names.filter((nome) => {
  return nome.charAt(0) === "g"
})

// nameConG è un nuovo array con solo i nomi con la g
// ["giulio", "gianni"] perché sono gli unici nomi che inizia con la g

const charatersConG = charaters.filter((charaters) => {
  return charaters.name.charAt(0) === "g"
})

// [
//   ({
//     name: "giulio",
//     favoriteNumber: 5,
//   },
//   {
//     name: "gianni",
//     favoriteNumber: 7,
//   }
// ]

// reduce è un metodo degli ARRAY per rideurre un array ad un singolo valore
// creiamo una stringa con tutti i nomi dei personaggi "giuliogianniferdinando"

const cosaStrana = charaters.reduce((acc, element) => {
  // acc è il valore che porteremo avanti ad ogni iterazione
  // element è l'elemento corrente
  return acc + element.name
}, "")

// cronostoria di acc
//  all'inizio è ""
//  poi è "" + "giulio" --> "giulio"
//  poi è  "giulio" + "gianni" --> "giuliogianni"
//  poi è  "giuliogianni" + "ferdinando" --> "giuliogianniferdinando"

// FUNZIONI
// una funzione è un blocco di codice dotato di nome, invocabile quante volte si desidera
// le funzioni in JS si possono definire in diversi modi, i più moderni sono:
// a) scrivere una funzione anonima e assegnarla ad una costante
const presentati = function () {
  console.log("Ciao, sono una funzione")
}
// b) scrivere la funzione con lo stile "arrow function"
const daiLaMano = () => {
  console.log("mi presento")
}
// una funzione freccia non possiede un significato interno per parole chiave come "this" e "super"
// per il resto sono la stessa cosa

// una funzione PRIMA si dichiara, e POI si INVOCA
presentati() // <-- invocazione di funzione, ora la sto ESEGUENDO
daiLaMano() // <-- invocazione di funzione, ora la sto ESEGUENDO

// però ogni tanto le funzioni trovano delle limitazioni
// nel codice che si trovano ad eseguire, più che altro
// perchè questo codice non può subire variazioni
// la funzione daiLaMano() al momento è in grado solamente di presentarsi a nome Stefano, per utilizzare
// un altro nominativo o creiamo una seconda funzione (sconsigliato, perchè deve fare le stesse cose ma
// solamente utilizzando un nome diverso) oppure togliamo il dato, 1a parola 'Stefano', e 10 sostituiamo
// con un PARAMETRO: un parametro è una sorta di "placeholder" , un valore temporaneo che poi verrà rimpiazzato

const ioMiChiamo = (nomeFornito = "mario") => {
  console.log("io mi chiamo " + nomeFornito)
}
ioMiChiamo("Alessio")
ioMiChiamo("Gianni")
ioMiChiamo("Christian")

ioMiChiamo() // "io mi chiamo mario", perché non avete dato l'argomento per il parametro fornito

// VALORI DI RITORNO

// immaginate una funzione che fa un calcolo complesso
// somma due numeri, li eleva al quadrato, e sottrae 17

const complexMath = function (num1, num2) {
  const sommo = num1 + num2
  const elevo = sommo * sommo
  const sottraggo = elevo - 17
  const risultatoFinale = sottraggo
  console.log(risultatoFinale)
}

complexMath(50, 81)

// l'idea è quella di spessare complexMath in diversi step; ognuno di questi
// farà un operazione singola (somma, elevazione etc.) e restituiste il risultato
// del suo pezzettino di calcolo

const somma = function (num1, num2) {
  const risultato = num1 + num2
  return risultato
}
const eleva = function (num1) {
  return num1 * num1
}

const sottrae = function (num1) {
  return num1 - 17
}

const risultatoComplesso = sottrae(eleva(somma(50, 72)))

//  questo mi permette di usare da singolarmente i vari passaggi di una funzione più complessa
somma(2, 3)

// DOM MANIPULATION
// La manipolazione del DOM (document object model) ci permette di manipolare il contenuto della pagina trami JS
// Con JS possiamo, creare, eliminare, modificare, applicare stili, CSS, classi, attributi etc. a tutti gli elementi della pagina
// tutto parte da un oggetto chiamato "document", che richiama la pagina attualmente caricata nel broswer
// tipicamente grazie a document parte la fase 1: la RICERCA degli elementi con cui interagire
// 1) ATTRAVERSAMENTO DEL DOM ("DOM traversing")
// per recuperare gli elementi del DOM che ci interessano abbiamo diverse metodoligie:
// a) document.getElementById() che ci permette di selezionare un elemento tramite id
// b) document.getElementsByClassName seleziona tutti gli elementi con una specifica classe
// c) document.getElementsByTagName seleziona tutti gli elementi con uno specifico tag (img, div, p, ul, etc.)
// d) document.querySelector() ci permette di selezionare il primo elemento che contiene un selettore CSS specifico
// e) document.querySelectorAll() seleziona tutti gli elementi con il selettore CSS che gli viene dichiarato

const link = document.querySelector("nav ul li:nth-of-type(3)") // terzo link della barra di navigazione
const section = document.getElementById("hero") // elemento con id="hero"

// 2) MANIPOLAZIONE DEGLI ELEMENTI
// i riferimenti recuperati dai metodi sopra citati sono degli OGGETTI, con un sacco di proprietà e metodi
// a vostra disposizione.

link.innerText // permette di leggere/scrivere il contenuto testuale dell'elemento
link.innerHTML // permette di leggere/scrivere il contenuto HTML dell'elemento
link.classList.add("nuova-classe") // aggiunge una classe CSS
link.classList.remove("nuova-classe") // rimuove una classe CSS
link.classList.toggle("nuova-classe") // aggiunge se manca, toglie se c'è già una classe CSS
link.style.color = "red" // aggiunge uno stile inline

//  creare elementi da zero
const title = document.createElement("h2")
title.innerText = "benvenuto " + charaters[1].name

section.appendChild(title)
section.remove()
title.addEventListener("click", function () {
  // al click del titolo, ingrandiscilo

  title.style.transform = "scale(1.2)"
})

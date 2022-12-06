/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n, m;
n = 17;
m = 10;
if (n > m) {
  console.log(n, "è maggiore di", m);
} else if (n < m) {
  console.log(m, "è maggiore di", n);
} else {
  console.log(n, "e", m, "sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num = 10;

if (num !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
num = 15;

if (num % 5 == 0) {
  console.log(num, "è divisibile per 5");
} else {
  console.log(num, "non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
n = 10;
m = 18;
if (n === 8 || m === 8) {
  console.log("uno dei due numeri è 8");
} else if (n + m === 8 || n - m === 8 || m - n === 8) {
  console.log("l'addizione o sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let spesa = 40;
let totale = spesa;

if (spesa <= 50) {
  totale = totale + 10;
}
console.log("spesa", spesa, "totale", totale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = 20;
spesa = 40;
totale = spesa - (spesa * sconto) / 100;

if (spesa <= 50) {
  totale = totale + 10;
}

console.log("spesa", spesa, "totale con sconto", totale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let x, y, z;
x = 0;
y = 5;
z = 17;
if (x > y) {
  if (y > z) {
    // x>y>z
    console.log(x, y, z);
  } else {
    //y<x && y<z
    if (x > z) {
      console.log(x, z, y);
    } else {
      console.log(z, x, y);
    }
  }
} else {
  //x<y
  if (y > z) {
    if (x > z) {
      // z<x<y
      console.log(y, x, z);
    } else {
      // x<y && y>z && z>x
      console.log(y, z, x);
    }
  } else {
    // x<y && y<z
    console.log(z, y, x);
  }
}
// casi :
// xyz; xzy;
// yxz; yzx;
// zxy; zyx;

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
num = 7;

if (typeof num === "number") {
  console.log(num, "è un numero");
} else {
  console.log(num, "non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
num = 3;
if (num % 2 === 0) {
  console.log(num, "è pari");
} else {
  console.log(num, "è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
let val = 18;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log("oggetto me:", me);
// TODO: //
me.city = "Toronto";

console.log("Aggiungo proprietà city", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("rimuovo la proprietà lastName:", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log("rimuovo ultimo elemento di skills:", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numeri = [];
numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("numeri:", numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri[numeri.length - 1] = 100;
console.log("sostituisco ultimo valore con 100", numeri);

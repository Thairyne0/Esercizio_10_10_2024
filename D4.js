/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1 = 10;
let l2 = 5;
const area = function (l1, l2) {
  let area = 0;
  area = l1 * l2;
  console.log("area del rettangolo é: " + area);
};

area(l1, l2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (l1, l2) {
  let sum = l1 + l2;
  if (l1 === l2) {
    sum = sum * 3;
    return sum;
  } else {
    return sum;
  }
};

console.log("la somma dei numeri é " + crazySum(l1, l2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (l1) {
  let diff = Math.abs(l1 - 19);
  if (l1 > 19) {
    diff * 3;
    return diff;
  } else {
    return diff;
  }
};

console.log("la somma dei numeri é " + crazyDiff(l1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (l1) {
  if ((20 <= l1 && l1 <= 100) || l1 === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(l1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = "giorgio";

const epify = function (string) {
  if (string === "EPICODE") {
    return string;
  } else {
    string = "EPICODE" + string;
    return string;
  }
};

console.log(epify(string));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (l1) {
  if (l1 % 3 === 0 || l1 % 7 === 0) {
    console.log("é multiplo");
  }
};

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
  let string2 = "";
  let j = 0;
  for (let i = string.length; (i = 0); i--) {
    string2.charAt[j] = string.charAt[i];
    j++;
  }
  return string2;
};

console.log(reverseString(string));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  let string2 = "";
  string2 = string.slice(1, string.length - 1);
  console.log(string2);
};

cutString(string);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let dim = 5;

const giveMeRandom = function (dim) {
  let array = [];
  for (let i = 0; i < dim; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  console.log(array);
};

giveMeRandom(dim);

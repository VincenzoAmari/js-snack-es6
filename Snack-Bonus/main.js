// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri  (a e b).

const names = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

const findSubArray = (array, indexStart, indexEnd) => {
  return array.slice(indexStart, indexEnd);
};

console.log(
  `gli elementi di ${names}, compresi tra 2 e 5 sono : ${findSubArray(
    names,
    2,
    5
  )}`
);

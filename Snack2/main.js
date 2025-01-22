// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
  // Punti casuali
  squadre[i].punti = getRandomNumber(1, 100);
  // Falli
  squadre[i].falliSubiti = getRandomNumber(1, 50);
}

const squadreStampa = [];
for (let i = 0; i < squadre.length; i++) {
  squadreStampa.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti,
  });
}

console.log("Array iniziale:", squadre);
console.log("Array Finale:", squadreStampa);

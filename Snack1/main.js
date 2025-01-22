// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Cannondale SuperSix EVO", peso: 7.2 },
  { nome: "Specialized S-Works Tarmac", peso: 6.7 },
  { nome: "Trek Émonda SLR", peso: 6.9 },
  { nome: "Giant TCR Advanced SL", peso: 7.0 },
];

const biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

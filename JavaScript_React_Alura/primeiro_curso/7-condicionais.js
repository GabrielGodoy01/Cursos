console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 15;
const estaAcompanhada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(0, 1);
// } else if (estaAcompanhada == true) {
//   console.log("Comprador acompanhado");
//   listaDeDestinos.splice(0, 1);
// } else {
//   console.log("Comprador menor de idade e não posso vender");
// }

// console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(0, 1);
} else {
  console.log("Comprador menor de idade e não posso vender");
}

console.log(listaDeDestinos);

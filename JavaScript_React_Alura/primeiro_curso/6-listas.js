console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

//o código acima é inviável, vale a pena usar arrays:

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(0, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

let idade = 18;
const anoNascimento = 2005;
let anoAtual = 2024;
const nomeCompleto = "Lucas Gabriel";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;

console.log(anoAtual);

idade = idade + 1;
console.log(idade);

const listaDeDestinos = new Array(
  "Buenos Aires",
  " Bangkok",
  " Londres",
  " Paris",
  " Nova York"
);

const idadeComprador = 15;

if(idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
} else {
  console.log("Não foi possível concluir a compra");
  console.log("você é menor de idade");
}
/*Faça um algoritmo que calcule e escreva a média aritmética
 dos números inteiros entre 15 (inclusive) e 100 (inclusive).*/

let soma = 0;
let quantidade = 0;

for (let i = 15; i <= 100; i++) {
  soma += i;
  quantidade++;
}

const media = soma / quantidade;

alert(`A média aritmética dos números inteiros entre 15 e 100 é ${media.toFixed(2)}`);

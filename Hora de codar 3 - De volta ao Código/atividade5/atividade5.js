/*Faça um algoritmo que calcule e escreva a média aritmética
 dos dois números inteiros informados pelo usuário e todos os
 números inteiros entre eles. Considere que o primeiro sempre
 será menor que o segundo.*/

 var num = parseInt(prompt("Informe apenas números inteiros"));
 var num2 = parseInt(prompt("Informe mais um número inteiros"));
 
 let soma = 0;
 let contador = 0;

 for (let i = num; i <= num2; i++) {
    soma += i;
    contador++;
  }

  let media = soma / contador;

  alert(`A média aritmética dos números entre ${num} e ${num2} é ${media} .`)
  


/*Escreva um programa em que o usuário informe 10 valores e 
escreva quantos desses valores lidos estão entre os números 
24 e 42 (incluindo os valores 24 e 42) e quantos deles estão 
fora deste intervalo*/

// Array para armazenar os valores informados pelo usuário
let valores = [];

// Solicita que o usuário informe 10 valores
for (let i = 0; i < 10; i++) {
  let valor = parseInt(prompt(`Informe o ${i+1}º valor:`));
  valores.push(valor);
}

// Variáveis para armazenar a quantidade de valores dentro e fora do intervalo
let dentroIntervalo = 0;
let foraIntervalo = 0;

// Verifica cada valor informado pelo usuário e incrementa as variáveis correspondentes
for (let i = 0; i < 10; i++) {
  if (valores[i] >= 24 && valores[i] <= 42) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
  }
}

// Exibe os resultados
alert(`${dentroIntervalo} valores estão dentro do intervalo [24, 42].`);
alert(`${foraIntervalo} valores estão fora do intervalo [24, 42].`);

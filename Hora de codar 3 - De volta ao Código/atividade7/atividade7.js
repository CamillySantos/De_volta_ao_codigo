/*Escreva um algoritmo para ler as notas de avaliações de um
 aluno, calcule e imprima a média (simples) desse aluno. 
 Só devem ser aceitos valores válidos durante a leitura 
 (0 a 10) para cada nota. São 6 notas ao total. Caso o valor
 informado para qualquer uma das notas esteja fora do limite
 estabelecido, deve ser solicitado um novo valor ao usuário. */


 var notas = []; 
 var numnotas = 6;

for (var i = 0; i <numnotas; i++) {
    var nota = parseFloat(prompt("Informe a nota: " + i));
    
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseFloat(prompt("Nota invalida! \nInforme outro valor: "))
    }
    notas.push(nota);
}

var media = notas.reduce((acc, curr) => acc + curr, 0) / numnotas;

alert("A média do aluno é de " + media);
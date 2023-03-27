/*Escreva um programa para ler 2 notas de um aluno, calcular e
 imprimir a média final. Considere que a nota de aprovação é 
9,5. Logo após escrever a mensagem "Calcular a média de outro
 aluno Sim/Não?" e solicitar um resposta. Se a resposta for 
 "S", o programa deve ser executado novamente, caso contrário 
 deve ser encerrado exibindo a quantidade de alunos aprovados.*/
 
 let aprovado = 0;


 do {
    
 var nota = parseFloat(prompt("Digite a nota"));
 var nota2 = parseFloat(prompt("Digite a segunda nota"));

 var media = (nota + nota2) / 2;

if (media >= 9.5) {
    alert("Aluno aprovado a média final é " + media);
    aprovado++;
} else if (media < 9.5) {
    alert("Aluno reprovado média final " + media);
}

var resposta = prompt("Calcular a média de outro aluno (S/N)?");

if (resposta === "n") {
    break;
}
} while (true);

alert(`Foram aprovados ${aprovado} .`);


 /*var resposta = prompt("Calcular a média de outro aluno Sim/Não?");

 if (resposta === s) {
    inicio();
 } else if (resposta === n) {
    alert("Quantidade de alunos aprovados" + aprovado);
 }*/

 


 

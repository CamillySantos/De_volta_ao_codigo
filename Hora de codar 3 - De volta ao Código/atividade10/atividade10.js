/* Escreva um programa para imprimir todas as tabuadas de 1 a 
N. N será informado pelo usuário.*/


function pulaLinha() {
    document.write("<br><br>");        
}
var num = parseInt(prompt("Informe até onde a tabuada deverá ir"));

for (let i = 1; i <= num; i++) {
    document.write(`Tabuada do ${i}:\n`);

    for (let j = 1; j <= 10; j++) {
        pulaLinha();
        document.write(`${i} x ${j} = ${i*j}`);
    }
    pulaLinha();
}

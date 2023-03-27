/*Escreva um algoritmo para ler 2 valores informados
         pelo usuário e se o segundo valor informado for igual
        ou menor que ZERO, deve ser lido um novo valor. 
        Ou seja, para o segundo valor não pode ser aceito o
        valor zero, nem um valor negativo.  O seu programa
        deve imprimir o resultado da divisão do primeiro 
        valor lido pelo segundo valor.*/

        var num1 = parseInt(prompt("Digite o 1º número"));
        var num2 = parseInt(prompt("Digite o 2º número"));
        

        while (num2 <= 0) {
            num2 = parseInt(prompt("Número inválido, digíte outro número"));
                  }

        var divisao = (num1 / num2);

        alert("O número " + num1 + " dividido por " + num2 + " é igual a " + divisao);
        

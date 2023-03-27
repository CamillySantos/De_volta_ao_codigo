/* Escreva um algoritmo para imprimir os 10 primeiros números
 inteiros maiores que 100.*/

 var numero = 101;
 var contador = 0;

 while (contador < 10) {
    if (numero > 100) {
        contador += 1;
        alert(numero);
        numero += 1;
    }
 }
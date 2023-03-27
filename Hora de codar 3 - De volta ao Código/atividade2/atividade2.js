/*Crie uma bomba relógio (usando somente código - para
deixar claro!) cuja contagem regressiva vá de 30 a 0.
Utilize "document.write" para escrever em tela e no 
final da repetição escreva "EXPLOSÃO".*/

var cont = 30;

while (cont >= 0) {
    alert("Contagem regressiva " + cont) + cont;
    cont--;
}

document.write("EXPLOSÃO!!!!");
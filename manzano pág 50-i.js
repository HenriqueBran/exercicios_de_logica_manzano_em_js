let valor = parseInt(prompt("Digite um valor positivo inteiro (digite um número negativo para encerrar):"));
let maior = valor;
let menor = valor;

while (valor >= 0) {
    if (valor > maior) {
        maior = valor;
    }
    if (valor < menor) {
        menor = valor;
    }

    valor = parseInt(prompt("Digite outro valor positivo inteiro (ou um número negativo para encerrar):"));
}

console.log("O maior valor informado foi: " + maior);
console.log("O menor valor informado foi: " + menor);

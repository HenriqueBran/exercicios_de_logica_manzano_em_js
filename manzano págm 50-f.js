let somatorio = 0;
let totalValores = 0;
let media;

do {
    let valor = parseInt(prompt("Digite um valor (digite um número negativo para encerrar):"));

    if (valor >= 0) {
        somatorio += valor;
        totalValores++;
    }
} while (valor >= 0);

if (totalValores > 0) {
    media = somatorio / totalValores;
    console.log("O somatório dos valores é: " + somatorio);
    console.log("A média aritmética dos valores é: " + media);
    console.log("O total de valores lidos é: " + totalValores);
} else {
    console.log("Nenhum valor válido foi fornecido.");
}

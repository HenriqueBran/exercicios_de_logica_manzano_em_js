let somatorio = 0;

for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt("Digite o valor " + i + ":"));
    let fatorial = 1;

    for (let j = 1; j <= valor; j++) {
        fatorial *= j;
    }

    somatorio += fatorial;
}

console.log("O somatório da fatorial dos 15 valores é: " + somatorio);

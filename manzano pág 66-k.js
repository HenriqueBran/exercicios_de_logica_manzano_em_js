let fatorial = 1;

// Loop para calcular o fatorial dos valores ímpares de 1 a 10
for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 !== 0) { // Verifica se o número é ímpar
        // Calcula o fatorial do número ímpar
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        // Exibe o resultado do fatorial do número ímpar
        console.log("O fatorial de " + numero + " é " + fatorial);
        // Reinicia o valor do fatorial para o próximo número ímpar
        fatorial = 1;
    }
}

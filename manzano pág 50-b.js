let numero, somatorio = 0; // Declaração das variáveis numero e somatorio, com inicialização do somatorio como 0

// Loop de 1 a 500 para somar os valores pares
for (numero = 1; numero <= 500; numero++) {
    if (numero % 2 === 0) { // Verifica se o número é par
        somatorio += numero; // Adiciona o número ao somatório
    }
}

console.log("O somatório dos valores pares de 1 a 500 é: ", somatorio); // Exibe o resultado no console

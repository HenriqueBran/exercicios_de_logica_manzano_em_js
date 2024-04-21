// Solicita a entrada da base e do expoente
let base = parseInt(prompt("Digite o valor da base: "));
let expoente = parseInt(prompt("Digite o valor do expoente: "));
let resultado = 1;

// Loop para calcular a potência
for (let pot = 1; pot <= expoente; pot++) {
    // Multiplica o resultado pela base
    resultado *= base;
}

// Exibe o resultado da potência
console.log("O resultado de " + base + "^" + expoente + " é " + resultado);

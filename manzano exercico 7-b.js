let F, C; // Declaração das variáveis F e C

// Solicitando a temperatura em Fahrenheit ao usuário
F = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

// Calculando a temperatura em Celsius
C = (F - 32) * (5 / 9);

// Exibindo a temperatura em Celsius
console.log("A temperatura em Celsius é: " + C);


let cotacao_dolar = parseFloat(prompt("Digite a cotação do dólar:"));
let quantidade_reais = parseFloat(prompt("Digite a quantidade de reais disponíveis:"));

let valor_dolares = quantidade_reais / cotacao_dolar;


console.log("O valor em dólares é: $", valor_dolares.toFixed(2)); // Arredondando para 2 casas decimais

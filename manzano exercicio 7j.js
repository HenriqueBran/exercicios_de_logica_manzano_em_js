let cotacao_dolar = parseFloat(prompt("Digite a cotação do dólar:"));
let quantidade_dolares = parseFloat(prompt("Digite a quantidade de dólares disponíveis:"));

let valor_reais = cotacao_dolar * quantidade_dolares;

console.log("O valor em reais é: R$", valor_reais.toFixed(2)); // Arredondando para 2 casas decimais

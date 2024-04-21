let valor = parseFloat(prompt("Digite o valor original da prestação:"));
let taxa = parseFloat(prompt("Digite a taxa de juros ao mês (%):"));
let tempo = parseInt(prompt("Digite o tempo de atraso da prestação (em meses):"));

let prestacao = valor + (valor * taxa / 100) * tempo;

console.log("O valor da prestação em atraso é:", prestacao);

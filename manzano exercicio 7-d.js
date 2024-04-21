let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h):"));

let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

console.log("Velocidade média:", velocidade);
console.log("Tempo gasto na viagem:", tempo);
console.log("Distância percorrida:", distancia);
console.log("Quantidade de litros utilizados:", litrosUsados);

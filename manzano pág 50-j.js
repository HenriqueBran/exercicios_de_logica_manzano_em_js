let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));
let resultado = 0;

while (dividendo >= divisor) {
    dividendo -= divisor;
    resultado++;
}

console.log("O resultado inteiro da divisão é: " + resultado);

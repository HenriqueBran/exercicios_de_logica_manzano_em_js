const numero = parseInt(prompt("Digite um número para a tabuada de multiplicação:"));

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
}

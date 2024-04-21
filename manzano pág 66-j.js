// Exibe o cabeçalho da tabela
console.log("Celsius   Fahrenheit");

// Loop para converter de 10 em 10 graus Celsius até 100 graus Celsius
for (let celsius = 10; celsius <= 100; celsius += 10) {
    // Calcula a temperatura em Fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;
    // Exibe os valores das temperaturas em Celsius e Fahrenheit
    console.log(celsius + "         " + fahrenheit);
}

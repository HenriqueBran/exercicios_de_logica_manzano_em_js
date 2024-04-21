// Inicializa o resultado da potência com 1, pois qualquer número elevado a 0 é 1
let resultado = 1;

// Exibindo a potência de 3 elevado a 0
console.log("3^0 = 1");

// Loop para calcular as potências de 3 de 1 até 15
for (let expoente = 1; expoente <= 15; expoente++) {
    // Calcula a potência de 3 elevado ao expoente atual
    let potencia = 3;

    // Multiplica o resultado pelo número base (3) repetidas vezes
    for (let pot = 2; pot <= expoente; pot++) {
        potencia *= 3;
    }

    // Exibe o resultado da potência
    console.log("3^" + expoente + " = " + potencia);
}

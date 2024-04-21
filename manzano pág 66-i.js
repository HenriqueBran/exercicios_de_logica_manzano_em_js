// Inicializa os dois primeiros termos da série
let termo_anterior = 1;
let termo_anterior_anterior = 1;

// Exibe os dois primeiros termos da série
process.stdout.write("1, 1, ");

// Loop para calcular e exibir os próximos termos da série até o décimo quinto termo
for (let contador = 3; contador <= 15; contador++) {
    // Calcula o próximo termo da série
    let termo_atual = termo_anterior + termo_anterior_anterior;

    // Exibe o próximo termo da série
    process.stdout.write(termo_atual + ", ");

    // Atualiza os termos anteriores para o próximo cálculo
    termo_anterior_anterior = termo_anterior;
    termo_anterior = termo_atual;
}

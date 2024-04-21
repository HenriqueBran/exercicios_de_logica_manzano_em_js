let area_total = 0;

do {
    let nome_comodo = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));

    // Calcula a área do cômodo
    let area_comodo = largura * comprimento;

    // Acumula a área total da residência
    area_total += area_comodo;

    console.log("A área do cômodo " + nome_comodo + " é: " + area_comodo + " metros quadrados.");

    let continuar = prompt("Deseja calcular a área de outro cômodo? (Sim/Nao):");
} while (continuar.toLowerCase() === "sim");

console.log("A área total da residência é: " + area_total + " metros quadrados.");

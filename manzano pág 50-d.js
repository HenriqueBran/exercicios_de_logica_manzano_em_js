let totalGraos = 0;
let graosQuadro = 1;

// Loop de 1 a 64 para calcular o total de grãos de trigo em cada quadrado
for (let numeroQuadro = 1; numeroQuadro <= 64; numeroQuadro++) {
    totalGraos += graosQuadro;
    graosQuadro *= 2;
}

console.log("O somatório do número de grãos de trigo é: " + totalGraos);

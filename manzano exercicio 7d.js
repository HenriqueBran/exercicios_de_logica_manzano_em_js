let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));

let Temp = A;
A = B;
B = Temp;

console.log("Os valores trocados são:");
console.log("A:", A);
console.log("B:", B);

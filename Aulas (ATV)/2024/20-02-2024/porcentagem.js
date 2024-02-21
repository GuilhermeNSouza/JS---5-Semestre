function calcularPorcentagem(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}
//let valorTotal = prompt("Digite um número: ");
//let porcentagem = prompt("Digite a porcentagem que você deseja calcular: ")
let valorTotal = 200;
let porcentagem = 20;
let resultado = calcularPorcentagem(valorTotal, porcentagem);
console.log("porcentagem", porcentagem + "% de", valorTotal + " é: ", resultado);
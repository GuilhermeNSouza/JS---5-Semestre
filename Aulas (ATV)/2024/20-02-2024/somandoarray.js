let array = [1, 2, 3, 4, 5];

function somandoArray(array) {
    let calculo = 0;
    for (let i = 0; i < array.length; i++) {
        calculo += array[i];
    }
    return calculo;
}
let total = somandoArray(array);
console.log("total dos números do array é: ", total);
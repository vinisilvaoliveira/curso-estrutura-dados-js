
// Arrays Tridimencionais 
var todosValores = [];
var pegar2Primeiros = [];
var pegar2Ultimos = [];

var array1 = [1,2,3,4,5]
var array2 = [6,7,8,9,0]

var array3 = [11,12,14,15,26]
var array4 = [17,18,19,20,21]

pegar2Primeiros = [array1, array2]
pegar2Ultimos = [array3, array4]

todosValores = [pegar2Primeiros, pegar2Ultimos]

// console.log(month[1][1][2]) pegar o 19 da linha 12

// pegar o conteudo dos arrays
for (let i = 0; i < todosValores.length; i++) {
    // log => [Array(5), Array(5)]
    for (let j = 0; j < todosValores[i].length; j++) {
        // (5) [1, 2, 3, 4, 5]
        // (5) [6, 7, 8, 9, 0]
        // (5) [11, 12, 14, 15, 26]
        // (5) [17, 18, 19, 20, 21]
        for (let g = 0; g < todosValores[i][j].length; g++) {
            console.log(todosValores[i][j][g]) // todos os valores
        }       
    }
}
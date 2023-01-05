
var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[numbers.length] = 10 // adionara mais um item no final do array
// numbers[numbers.length] = 20

numbers.push(40)     //adicionar uma posicao no final do array
numbers.unshift(-2) // adicionar uma posicao no inicio do array

numbers.pop() // remove ultimo Item do array
numbers.shift() // remove primeiro item array

console.log(numbers) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2 parametros
numbers.splice(5, 3) // cortar elementos de uma determinada posição
// primeiro parametro = a partir de qual posição ira remover/adicionar (incluindo ela).
// Segundo parametro = quantas posições serão excluidas.
//resultado = [0, 1, 2, 3, 4, 8, 9, 10] excluimos o 5,6,7

// 3 parametros
numbers.splice(5, 0, 5,6,7) // inserir itens no array em uma determinada posição
// primeiro parametro = a partir de qual posição ira remover/adicionar incluindo ela com ela
// Segundo parametro = quantas posições serão excluidas.
// da terceira posição em diante sera o que irá ser incluso
console.log(numbers)
//resultado = [0, 1, 2, 3, 4, 8, 9, 10] incluimos o 5,6,7 a partir da 5 posição
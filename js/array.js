
// exemplo de array

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//varrendo o array com for
for (let i = 0; i < daysOfWeek.length; i++) {
    const element = daysOfWeek[i];
    console.log(element) // Mostrará tod os dias da semana (daysOfWeek)
}


var fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 2

for( var i = 3; i < 10; i++) {
    fibonacci[i] = fibonacci[i -1 ] + fibonacci[i -2]
}

// fibonacci é o numero atual + numbero anterior o resultado dessa soma  irá ser acrescentado no proximo elemento do array
console.log(fibonacci); //  [0, 1, 2, 3, 5, 8, 13, 21, 34, 55]


var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[numbers.length] = 10
// numbers[numbers.length] = 20

numbers.push(40)     //adicionar uma posicao no final do array
numbers.unshift(-2) // adicionar uma posicao no inicio do array

numbers.pop() // remove ultimo Item do array
numbers.shift() // remove ´primeiro item array

console.log(numbers) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numbers.splice(5, 3) // cortar elementos de uma determinada posição
// primeiro parametro = a partir de qual posição ira remover/adicionar incluindo ela com ela
// Segundo parametro = quantas posições serão excluidas.
//resultado = [0, 1, 2, 3, 4, 8, 9, 10] excluimos o 5,6,7

numbers.splice(5, 0, 5,6,7) // inserir itens no array em uma determinada posição
// primeiro parametro = a partir de qual posição ira remover/adicionar incluindo ela com ela
// Segundo parametro = quantas posições serão excluidas.
// da terceira posição em diante sera o que irá ser incluso
//resultado = [0, 1, 2, 3, 4, 8, 9, 10] incluimos o 5,6,7 a partir da 5 posição
console.log(numbers)
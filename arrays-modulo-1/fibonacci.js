// Fibonaci
// fibonacci é o numero atual + numero anterior o resultado dessa soma irá ser acrescentado no proximo elemento do array
var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 2
for( var i = 3; i < 10; i++) {
    fibonacci[i] = fibonacci[i -1 ] + fibonacci[i -2]
}
console.log(fibonacci); //  [0, 1, 2, 3, 5, 8, 13, 21, 34, 55]



function decToBin(decNumber) { //23
    var resStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) { //numero inserido
        rest = Math.floor(decNumber % 2) // esse numero e divisivel por 2 ? // math.floor serve para arredondar pra baixo
        resStack.push(rest) // incluir o resto da divisão no array resStack // [1,1,1,0,1]
        decNumber = Math.floor(decNumber / 2) // pegar o numero inserido e dividir por 2 como esta com (math.floor)
    }

    while (resStack.length > 0) {
        binaryString += resStack.pop().toString() // ultimo entrar sera o primeiro a sair 10111
    }

    return binaryString

}

console.log(decToBin(23)); //10111
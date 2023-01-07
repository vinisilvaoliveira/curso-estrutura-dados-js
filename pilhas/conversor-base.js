// Conversor de base, Binário, Octal, Decimal, Hexadecimal
// https://www.calculadoraonline.com.br/conversao-bases

// exercicio para exemplificar o conceito de pilha ( Last In First Out) último a entrar, primeiro a sair

function baseConverter(decNumber, base) { //23
    var resStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0) { // 3 numero inserido
        rest = Math.floor(decNumber % base) // 1 // numero / pela base  // math.floor serve para arredondar pra baixo
        resStack.push(rest) // incluir o resto da divisão no array resStack // [1,1,1,0,1]
        decNumber = Math.floor(decNumber / base) // resultado da divisao na variavel digitada pelo usuario
    }

    while (resStack.length > 0) { // tamanha do array linha 9
        baseString +=digits[resStack.pop()] // 1111011 // pega ultimo valor do array da linha 9 compara com a posição do digits (inputa o valor que esta no digits
        // ao dar o .pop() ele diminuira uma posição no array resStack
    }

    return baseString

}

console.log(baseConverter(123, 2)); 
// resultados : 
// Decimal 123
// Binário 1111011
// Octal 173
// Hexadecimal 7B
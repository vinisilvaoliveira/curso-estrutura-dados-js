// Filas, primeiro a entrar é o primeiro a sair

function Queue() {
    var items = [];

    this.enqueue = function(elemento) {
        //adicionar um novo item
        items.push(elemento)
    }

    this.dequeue = function() {
        //remove o primeiro elemento da fila
        return items.shift()
    }

    this.front = function() {
        // retornar o primeiro elemento da fila
        return items.length > 0 ? items[0] : 0;
    }

    this.isEmpty = function() {
        // verificar se a fila esta vazia
        return items.length < 1;
    }

    this.size = function() {
        //verificar tamanho da fila
        return items.length
    }

    this.prit = function() {
        // imprimir fila no console
        console.log(items.toString())
    }
}



function hotPotato(nameList, num) { // names, 7
    var queue = new Queue();
    
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    console.log(queue.size())

    var eliminated = '';

    while (queue.size() > 1) {
        for (let j = 0; j < num; j++) {
            queue.enqueue(queue.dequeue()) // [ 'Lucas','João','Maria'] 
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' Was eliminated from the hot potato game')
    }
    return queue.dequeue();
}

var names = ['João', 'José', 'Maria', 'Ana', 'Lucas',] 
var winner = hotPotato(names, 7);

console.log('The Winner is: ' + winner)
// Maria Was eliminated from the hot potato game
// José Was eliminated from the hot potato game
// Lucas Was eliminated from the hot potato game
// Ana Was eliminated from the hot potato game
// -- The Winner is: João --
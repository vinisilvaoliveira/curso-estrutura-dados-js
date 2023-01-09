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


// Lista de prioridade

function PriorityQueue() {
    var items = [];

    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true;
                break
            }
        }
        if (!added) {
            items.push(queueElement)
        }
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.print = function () {
        for (let i = 0; i < items.length; i++) {
           console.log(items[i].element + ' ' + items[i].priority)
            
        }
    }
}


var pqueue = new PriorityQueue();

pqueue.enqueue('Vini', 2);
pqueue.enqueue('Fran', 3);
pqueue.enqueue('Simba', 1);
pqueue.print()
// lista ligadas

function linkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {
        // adiciona um elemento no final da lista
        var node = new Node(element),
        current 

        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.insert = function(position, element) {
        // adiciona um elemento em uma posição especifica
        if (position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if (position === 0) { 
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function(position) {
        //remove o elemento de uma posição especifica
        if (position > -1 && position < length) {
            var current = head,
            previous,
            index = 0
            if (position === 0) {
                head = current.next
            } else {
                while (index ++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        // remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
        
    }
    this.indexOf = function(element) {
        // retorna a posição do elemento
        var current = head,
        index = 0

        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    this.isEmpty = function() {
        // retorna se esta vazia ou não a instancia
        return length === 0
    }

    this.size = function() {
        // retorna  o tamanho da instancia
        return length
    }

    this.getHead = function() {
        // retorna  o tamanho da instancia
        return head
    }

    this.toString = function() {
        // converte em string
        var current = head,
        string = ''

        while (current) {
            string += current.element + ' '
            current = current.next
        }
        return string
    }

    this.print = function() {
        // imprime no console
        console.log(this.toString())
    }
}

var ll = new linkedList()

ll.append('joao');
ll.append('jose');
ll.append('maria');
ll.print();

// ll.removeAt(1)
// ll.print();

ll.insert(0, 'carlos')
ll.print();
ll.insert(2, 'ze')
ll.print();


// console.log(ll.indexOf('joao'))

console.log(ll.remove('ze'))
ll.print();


console.log(ll.isEmpty())
console.log(ll.size())
console.log(ll.getHead())

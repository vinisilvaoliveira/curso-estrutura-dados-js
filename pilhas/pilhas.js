//  Pilhas, primeiro a entrar, ultimo a sair.

function Stack() {
    var items = [];

    this.push = function(element) {
        // adiciona um item do topo da pilha
        items.push(element);
    }

    this.pop = function() {
        // remover o item do topo da pilha
        return items.pop();
    }

    this.peek = function() {
        // devolve o elemento que esta no topo da pilha
        return items[items.length -1];
    }

    this.isEmpty = function() {
        // informar se a pilha esta vazia ou não
        return items.length === 0;
    }

    this.clear = function() {
        // limpa pilha
        items = [];
    }

    this.size = function() {
        //tamanho da pilha
        return items.length;
    }

    this.print = function() {
        // imprimir a pilha no console
        console.log(items.toString());
    }

}

var pilha = new Stack();

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)

pilha.pop()
pilha.pop()
pilha.pop()
pilha.pop()
// pilha.clear()
pilha.print()
console.log(pilha.isEmpty())
// Geneerics : function, class, interface, type -> 호환을 맞춰줌

function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo:1}, {bar:1})
console.log(merged)

function wrap<T>(param: T) {
    return {
        param
    }
}
const wrapped = wrap(10);


// interface + generics
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

// type alias + generics
type Items2<T> = {
    list: T[];
}

const items2: Items2<number> = {
    list: [1, 2, 3]
}

// class + generics
class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
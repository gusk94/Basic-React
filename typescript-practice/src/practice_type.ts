let count = 0;
count += 1

// count = "wow" // -> error!

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];

const messages: string[] = ['hello', 'world'];

// messages.push(1); // -> 숫자 넣어지지 않음

let mightBeUndefined: string | undefined = undefined; // string or undefined
let nullableNumber: number | null = null; // number or null
let color: 'red' | 'oragne' | 'yellow' = 'red'; // red or yellow or orange
color = 'yellow'
// color = 'green' // error

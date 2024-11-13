// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

let stack = [5, 10, 15];

// Add an element to the stack
stack.push(20);

// Push two more numbers to the stack
stack.push(25);
stack.push(30);

// Check if an element exists
console.log(stack.includes(15));
console.log(stack.includes(100));

//console.log("Stack before pop:", stack);

//const result = stack.pop();

//console.log("Stack after pop", stack);
//console.log("Number removed", result);


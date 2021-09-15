// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module');
const calculator = new C(2, 5);
console.log(calculator.add());
console.log(calculator.multiply());

// exports
const { add, multiply } = require('./test-module2');
console.log(add(4, 9));
console.log(multiply(4, 9));

// caching
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
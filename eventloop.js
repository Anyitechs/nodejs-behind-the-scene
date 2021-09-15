const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(() => console.log('Timer 1 finished'), 1000);
setImmediate(() => console.log('Immediate 1 finishes'));

fs.readFile('text-file.txt', () => {
    console.log('I/O finished');
    console.log('==================');

    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finishes'));

    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted');
    });
});

console.log('Hello from the top-level code');
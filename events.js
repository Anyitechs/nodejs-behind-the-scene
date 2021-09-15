const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('newOrder', () => {
    console.log('There was a new order!');
});

myEmitter.on('newOrder', () => {
    console.log('Customer name is James');
});

myEmitter.on('newOrder', stock => {
    console.log(`there are ${stock} items left.`);
});

myEmitter.emit('newOrder', 9);

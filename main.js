const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const obj = {type: 'text', data: 'Hello Codeit', date : '2020-09-01'};

myEmitter.on('test', (info) => {
    console.log(info);
});

myEmitter.emit('test',obj);
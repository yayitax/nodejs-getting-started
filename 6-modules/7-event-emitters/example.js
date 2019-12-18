const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmmitter = new EventEmitter();

setImmediate(() => {
    myEmmitter.emit('TEST_EVENT');
})

myEmmitter.on('TEST_EVENT', () => {
    console.log("TEST_EVENT was fired");
});
const events = require('events');

const myEmit = new events.EventEmitter();

myEmit.on('some_event', text => {
    console.log(text);
});

myEmit.emit('some_event', 'event test string');

module.exports = {
    myEmit: myEmit
};
const events = require('events');
const util = require('util');

const Cars = function(model){
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BMW');
const audi = new Cars('audi');
const volvo = new Cars('volvo');

const cars = [bmw, audi, volvo];
cars.forEach(function(car){
    car.on('speed', function(text){
       console.log(car.model + ' speed -- ' + text)
   })
});

bmw.emit('speed', '254 km');
audi.emit('speed', '250 km');
volvo.emit('speed', '240 km');
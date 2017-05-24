// var http = require('http');

// var server = http.createServer();
// server.on('request', function(req, res) {

// });

// // var server = http.createServer(function(request, response) {
  
// // });
var util = require('util');

const EventEmmiter = require('events');
const myEmmiter = new EventEmmiter();

myEmmiter.once('newListener', function(event, listener){
    if(event === 'event') {
        myEmmiter.on('event', function() {
            console.log('B: ', util.inspect(myEmmiter));
        });
    }
});

myEmmiter.once('removeListener', function(event, listener) {
    if(event === 'event') {
        myEmmiter.on('event', function() {
            console.log('Bx');
        })
    }
});

function xhand() {
    console.log('A');
}

myEmmiter.on('event', xhand);

myEmmiter.removeListener('on', xhand);

myEmmiter.emit('event');
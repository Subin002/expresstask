// var http=require('http');
// var url=require('url')
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("hello world");
//     res.write(req.url);
//     res.end();
// }).listen(9000);

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
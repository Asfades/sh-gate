var WebSocketServer = require('ws').Server, 
    express = require('express'),
    http = require('http'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    wsServer = http.createServer(app);

    var dump = {a: 20, b: '20'};

const util = require('util');


//console.log(util.inspect(dump, true, null));

var ws = new WebSocketServer({server: wsServer, clientTracking: true, path: '/exp'});

// console.log(util.inspect(ws));

ws.on('message', function(e){
    console.log('------------\nclients: \n', util.inspect(ws.clients, false, null, '\n\n------------'));
    console.log('e: ', e);
});

// var expressWS = require('express-ws')(app);

// app.ws('/', function(ws, req) {
//     ws.on('message', function(msg) {
//         console.log(msg);
//         res = 'response text';
//     }); 
//     console.log('socket : ', req.testing);

//     console.log('req method: ', req.method);
//     console.log('req headers: ', req.headers);
//     console.log('req user agent: ', req.headers['user-agent']);
// });

//HTTP
app.use(express.static(path.join(__dirname, 'dash.js-development/dist')));
app.use('/files', express.static('node_modules'));

app.use(function(req, res, next) {
    console.log('Here goes middleware');
    req.testing = 'testing...';
    return next();
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/view/shtainer-gate.html'));
    console.log('get route', req.testing);
    res.end();
});

app.get('/home', function(req, res){
    res.send('Some duck ate my carrot');
});

app.listen(3000, function() {
    console.log('Example app on port: 3000');
});

//Dead ideas:

//var serveStatic = require('serve-static')

/*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var file =  fs.createReadStream('shtainer-gate.html');
    file.pipe(res);

    console.log('listening port: 3000');
}).listen(3000);

var pages = {};
pages.home = fs.readFileSync();

*/

//app.use(serveStatic('dash.js-development/dist'));
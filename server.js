const http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');

var counter = 0;

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        counter++;
        console.log('request #%d received', counter);
    }).listen(8888);
}
exports.start = start;

console.log('Server is listening on port 8888');
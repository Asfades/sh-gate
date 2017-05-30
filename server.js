const http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url'),
    formidable = require('formidable');

var counter = 0;

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = '';
        
        request.setEncoding('utf8');

        request.addListener('error', function(e) {
            debugger;
            console.log('An error occured: ', e);
        });


        request.addListener('data', function(postDataChunk) {
            debugger;
            postData += postDataChunk;
        });

        request.addListener('end', function() {
            debugger;
            route(handle, pathname, response, postData);
        });
        
                // if(request.url == '/upload' && request.method.toLowerCase() == 'post') {
        //     var form = new formidable.IncomingForm();
        //     form.parse(request, function(err, fields, files){
        //         response.writeHead(200, {'content-type' : 'text/plain'});
        //         response.write('received upload:\n\n');
        //         res.end(util.inspect({fields: fields, files: files}));
        //     });
        //     return;
        // }

        // response.writeHead(200, {'content-type' : 'text/plain'});
        // response.end(
        //     '<form action="/upload" enctype="multipart/form-data" method="post">' +
        //     '<input type="text" name="title"><br>' + 
        //     '<input type="file" name="upload" multiple="multiple"><br>' +
        //     '<input type="submit" value="Upload">' + 
        //     '</form>'
        // );
        
    }).listen(8888);
}
exports.start = start;

console.log('Server is listening on port 8888');
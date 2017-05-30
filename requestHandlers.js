var exec = require('child_process').exec;
var querystring = require('querystring'),
    fs = require('fs');

var body = '<html>' +
    '<head><meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" /></head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="upload">' +
    '<input type="submit" value="send text">' +
    '</form>' +
    '</body>' +
    '</html>';


function start(response, postData) {
    console.log('Request handler "start" was called');
    var content = 'empty';
    response.writeHead(200, { 'ContentType': 'text/plain' });
    response.write(body);
    response.end();
    // exec('find /',
    //     { timeout: 10000, maxBuffer: 20000 * 1024 },
    //     function (err, stdout, stderr) {
    //         response.writeHead(200, { 'ContentType' : 'text/plain' });
    //         response.write(stdout);
    //         response.end();
    //     });
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
}

function upload(response, postData) {
    debugger;
    console.log('is postData object from upload: ', typeof postData);
    console.log('Request handler "upload" was called');
    response.writeHead(200, { 'ContentType': 'text/plain' });
    response.write('You have sent: ' + querystring.parse(postData).text, 'utf8', function() {
        console.log('upload write - callback function ');
    });//default encoding value == utf8
    response.end();
}

function show(response, postData) {
    console.log('"show" handler was called *');
    fs.readFile('/tmp/test.png', 'binary', function(error, file) {
        if(error) {
            response.writeHead(500, {'content-type' : 'text/plain'});
            response.write(error, '\n');
            response.end(); 
        } else {
            response.writeHead(200, {'content-type' : 'image/png'});
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
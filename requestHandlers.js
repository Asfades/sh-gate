var exec = require('child_process').exec;

function start(response) {
    console.log('Request handler "start" was called');
    var content = 'empty';

    exec('ls -lah', function(err, stdout, stderr) {
        response.writeHead(200, {'ContentType': 'text/plain'});
        response.write(stdout);
        
    });

    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
}

function upload() {
    console.log('Request handler "upload" was called');
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
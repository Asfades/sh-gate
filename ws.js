var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function(req, res, next) {
    console.log('middleware');
});
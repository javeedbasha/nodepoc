var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var services = require('./routes/services');
    
var app = express();

var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/services', services);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function(){
    console.log("Running my app on port " + port);
});

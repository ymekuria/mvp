var express = require('express');
var partials = require('express-partials');
// var mongoose = require('mongoose');
// var morgan = require('morgan');
// var bodyParser = require('body-parser');
var app = express();

              // set the static files location /public/img will be /img for users
// app.use(morgan('dev'));                                         // log every request to the console           // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());  
app.use(express.static(__dirname + '/public'));    


// setting the port variable to the process variable or port 5000
var port = process.env.PORT || 3000;


app.listen(port);
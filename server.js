var express = require('express');
var partials = require('express-partials');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));  
app.use(bodyParser.json());  
app.use(express.static(__dirname + '/client'));   // serving static assests. 


// setting the port variable to the process variable or port 5000
var port = process.env.PORT || 3000;


app.listen(port);

//TODO: abstract this out to another file
//api
app.post('api/calender', function(req, resp){
  console.log('req.body in API', req.body);
  res.end('test');
});
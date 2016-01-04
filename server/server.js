var express = require('express');
var mongoose = require('mongoose');
var app = express();

// setting the port variable to the process variable or port 5000
var port = process.env.PORT || 5000;

app.listen(5000);
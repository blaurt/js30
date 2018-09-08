// 'use strict';
var express = require('express');
var serveIndex = require('serve-index');

var app = express();

app.use(
  '/',
  express.static(__dirname + '/lessons'),
  serveIndex(__dirname + '/lessons', { icons: true })
);

// Listen
app.listen(3000);

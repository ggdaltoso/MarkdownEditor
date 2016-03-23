var express = require('express');

// get sharejs dependencies
var sharejs = require('share');
var redisClient = require('redis').createClient();

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function(req, res) {
  res.render('pad');
});
app.get('/(:id)', function(req, res) {
  res.render('pad');
});

// options for sharejs
var options = {
  db: {type: 'redis', client: redisClient}
};

sharejs.server.attach(app, options);

// listen on port 8000 (for localhost)
var port = process.env.PORT || 8000;
app.listen(port);

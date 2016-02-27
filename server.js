var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');

var db = require('./config/db');

var port = process.env.PORT || 80;

var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({
    secret: 'mySecretKey'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var mongoose = require('mongoose');

mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');

require('./app/routes.js')(app);// configure our routes

app.listen(port);

app.get('/control/start', function(req, res) {
  console.log('do start');
});

app.get('/control/stop', function(req, res) {
  console.log('do stop');
});
                   
console.log('Magic happens on port ' + port);
          
exports = module.exports = app;

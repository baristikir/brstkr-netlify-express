var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

var app = express();

mongoose.connect('mongodb://localhost:27017/brstkr-mongodb', {useNewUrlParser: true, useUnifiedTopology: true});

const clientsRouter = require('./routers/clients.router');
const placesRouter = require('./routers/places.router');
const adminrouter = require('./routers/admin.router');


app.use('/admin', adminrouter);
app.listen(8080, () => console.log('Admin Dashboard is running under localhost:8080/admin'));

app.use('/clients', clientsRouter);
app.use('/clients/:userId/palces', placesRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.get('/work', function (req, res, next) {
  res.render('work');
});

app.get('/about', function (req, res, next) {
  res.render('about');
});

app.get('/contact', function (req, res, next) {
  res.render('contact');
});

app.get('/project-one', function (req, res, next) {
  res.render('project');
});

app.get('/project-two', function (req, res, next) {
  res.render('project2');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

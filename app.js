var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const crown_93_Router = require('./routes/crown_93');
const crown2_93_Router = require('./routes/crown2_93');
const api_93_Router = require('./routes/api_93');
const midproj_93_Router = require('./routes/midproj_93');
const midterm_93_Router = require('./routes/midterm_93');
const booksRouter = require('./routes/books_93');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: ['https://crown1101.herokuapp.com'],
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api_93', cors(), api_93_Router);

/* crown_93 */
app.use('/crown_93', crown_93_Router);
app.use('/crown2_93', crown2_93_Router);

/* midproj_93 */
app.use('/midproj_93', midproj_93_Router);

/* midterm_93 */
app.use('/midterm_93', midterm_93_Router);

/* Books CRUD demo */
app.use('/books_93', booksRouter);

/* finalproj_93 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

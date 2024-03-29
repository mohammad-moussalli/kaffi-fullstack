var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scholorshipRouter = require('./routes/scholorships');
var faqRouter = require('./routes/faqs');
var faqCategoryRouter = require('./routes/faqs_categories');
var contactUsRouter = require('./routes/contact_us');
var donorRouter = require('./routes/donors');
var storyRouter = require('./routes/stories');
var webinarRouter = require('./routes/webinars');
var webinarQuestionsRouter = require('./routes/webinars_questions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/scholorships', scholorshipRouter);
app.use('/faqs', faqRouter);
app.use('/faq-categories', faqCategoryRouter);
app.use('/contact-us', contactUsRouter);
app.use('/donors', donorRouter);
app.use('/stories', storyRouter);
app.use('/webinars', webinarRouter);
app.use('/webinar-questions', webinarQuestionsRouter);


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

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
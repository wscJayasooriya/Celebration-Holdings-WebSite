require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs  = require('express-handlebars');
const nodemailer = require('nodemailer');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');
const abouteRouter = require('./routes/about');
const shopRouter = require('./routes/shop');
const certifRouter = require('./routes/certification');
const organicRouter = require('./routes/organic');
const nonOrganicRouter = require('./routes/non_organic');
const proJuiceRouter = require('./routes/product_juice');
const proSpiceRouter = require('./routes/product_spice');
const proCannedRouter = require('./routes/product_canned');
const proCoconutRouter = require('./routes/product_coconut');
const proDehydratedRouter = require('./routes/product_dehydrated');
const proEssentialRouter = require('./routes/product_essential');
const proRecyRouter = require('./routes/product_recy');
const proGardningRouter = require('./routes/product_gardning');
const policyRouter = require('./routes/privacy_policy');

const app = express();



const isEqualHelperHandlerbar = function(a, b, opts) {
  if (a == b) {
      return opts.fn(this) 
  } else { 
      return opts.inverse(this) 
  } 
}


// view engine setup
app.engine('hbs', hbs({extname:'hbs', defaultLayout : 'layout', layoutsDir: __dirname+'/views/layouts/',  helpers : {if_equal : isEqualHelperHandlerbar}}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+'/public'));





 

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/about', abouteRouter);
app.use('/shop', shopRouter);
app.use('/certification', certifRouter);
app.use('/organic', organicRouter);
app.use('/non_organic', nonOrganicRouter);
app.use('/product_juice', proJuiceRouter);
app.use('/product_spice', proSpiceRouter);
app.use('/product_canned', proCannedRouter);
app.use('/product_coconut', proCoconutRouter);
app.use('/product_dehydrated', proDehydratedRouter);
app.use('/product_essential', proEssentialRouter);
app.use('/product_recy', proRecyRouter);
app.use('/product_gardning', proGardningRouter);
app.use('/privacy_policy', policyRouter);

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

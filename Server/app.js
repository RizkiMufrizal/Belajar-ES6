(function() {
  'use strict';

  var http = require('http'),
    express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler'),
    Logger = require('./utils/Logger'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    csrf = require('csurf'),
    BarangRoute = require('./routes/BarangRoute'),

    app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(cookieParser());
  app.use(csrf({
    cookie: true
  }));
  app.use(function(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return next();
  });
  app.use(morgan('combined', {
    stream: Logger.stream
  }));
  app.use(methodOverride());
  app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use('/api', BarangRoute);

  mongoose.connect('mongodb://localhost/BelajarES6', function(err, res) {
    if (err) {
      return Logger.error('koneksi mongodb gagal bung', err);
    } else {
      return Logger.info('koneksi mongodb berhasil bung');
    }
  });

  if ('development' === app.get('env')) {
    app.use(errorhandler());
  }

  app.use(function(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);

    // handle CSRF token errors here
    res.status(403)
    res.json({
      success: false,
      info: 'csrf token tidak tersedia bung'
    });
  });

  var server = http.createServer(app);
  server.listen(app.get('port'), function() {
    return Logger.info('Server jalan pada port ' + app.get('port'));
  });

}).call(this);

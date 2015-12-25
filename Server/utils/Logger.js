(function() {
  'use strict';

  var winston = require('winston'),
    dateformat = require('dateformat');
  winston.emitErrs = true;

  var logger = new winston.Logger({
    transports: [
      new winston.transports.File({
        level: 'debug',
        filename: './logs/' + dateformat(Date(), 'dddd, mmmm dS, yyyy'),
        timestamp: true,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false
      }), new winston.transports.Console({
        level: 'debug',
        timestamp: true,
        handleExceptions: true,
        json: false,
        colorize: false
      })
    ],
    exitOnError: false
  });

  module.exports = logger;

  module.exports.stream = {
    write: function(message, encoding) {
      return logger.info(message);
    }
  };

}).call(this);

'use strict';

var config = require('./config');

var copy = {
  test: {
    expand: true,
    cwd: config.test,
    dest: config.build + '/' + config.test,
    src: ['**/*.html']
  }
};

module.exports = copy;

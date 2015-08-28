'use strict';

var config = require('./config');

var uglify = {
  dist: {
    src: config.build + '/' + config.src + '/hazdev-d3.js',
    dest: config.dist + '/hazdev-d3.js'
  }
};

module.exports = uglify;

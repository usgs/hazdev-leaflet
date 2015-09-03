'use strict';

var config = require('./config');

var uglify = {
  dist: {
    src: config.build + '/' + config.src + '/hazdev-leaflet.js',
    dest: config.dist + '/hazdev-leaflet.js'
  }
};

module.exports = uglify;

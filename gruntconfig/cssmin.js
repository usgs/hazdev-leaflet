'use strict';

var config = require('./config');

var cssmin = {
  dist: {
    src: config.build + '/' + config.src + '/hazdev-leaflet.css',
    dest: config.dist + '/hazdev-leaflet.css'
  }
};

module.exports = cssmin;

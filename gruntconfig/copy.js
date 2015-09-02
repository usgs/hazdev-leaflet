'use strict';

var config = require('./config');

var copy = {
  build: {
    expand: true,
    cwd: config.src + '/leaflet',
    dest: config.build + '/' + config.src,
    src: [
      'hazdev-leaflet.css',
      'images/**'
    ]
  },

  dist: {
    expand: true,
    cwd: config.src + '/leaflet',
    dest: config.dist,
    src: [
      'hazdev-leaflet.css',
      'images/**'
    ]
  },

  test: {
    expand: true,
    cwd: config.test,
    dest: config.build + '/' + config.test,
    src: ['**/*.html', 'jsonp.js']
  }
};

module.exports = copy;

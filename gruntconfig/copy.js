'use strict';

var config = require('./config');

var copy = {
  build: {
    expand: true,
    cwd: config.src,
    dest: config.build + '/' + config.src,
    src: [
      'leaflet.css',
      'images/**'
    ]
  },

  dist: {
    expand: true,
    cwd: config.src,
    dest: config.build + '/' + config.dist,
    src: [
      'leaflet.css',
      'images/**'
    ]
  },

  test: {
    expand: true,
    cwd: config.test,
    src: ['**/*.html', 'jsonp.js'],
    dest: config.build + '/' + config.test
  }
};

module.exports = copy;

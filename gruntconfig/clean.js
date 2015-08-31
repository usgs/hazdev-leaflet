'use strict';

var config = require('./config');

var clean = {
  build: [
    config.build
  ],

  dist: [
    config.dist
  ],

  example: [
    config.example + '/images',
    config.example + '/hazdev-leaflet.css',
    config.example + '/Leaflet.js',
    config.example + '/hazdev-leaflet.js'
  ]
};

module.exports = clean;

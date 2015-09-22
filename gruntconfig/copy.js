'use strict';

var config = require('./config');

var copy = {
  test: {
    expand: true,
    cwd: config.test,
    dest: config.build + '/' + config.test,
    src: ['**/*.html']
  },

  leaflet: {
    expand: true,
    cwd: 'node_modules/leaflet/dist/images',
    dest: config.build + '/' + config.src + '/images',
    src: '**'
  }
};

module.exports = copy;

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
    cwd: 'node_modules/leaflet/dist',
    dest: config.build + '/' + config.src + '/lib/leaflet-0.7.7',
    rename: function (dest, src) {
      var newName;

      newName = src.replace('leaflet.js', 'leaflet-min.js');
      newName = newName.replace('leaflet-src.js', 'leaflet.js');

      return dest + '/' + newName;
    },
    src: '**/*'
  }
};

module.exports = copy;

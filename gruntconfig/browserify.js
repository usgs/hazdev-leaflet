'use strict';

var config = require('./config');


var EXPORTS = [
  './node_modules/leaflet/dist/leaflet-src.js:leaflet'
].concat(
  [
    'leaflet/ArcIdentify',
    'leaflet/ArcTileLayer',
    'leaflet/FullscreenControl',
    'leaflet/HazardFaultLayer',
    'leaflet/MousePositionControl'
  ].map(function (path) {
    return './' + config.src + '/' + path + '.js:' + path;
  })
);


var browerify = {
  options: {
    browserifyOptions: {
      debug: true,
      paths: [
        './' + config.src,
        './node_modules/hazdev-webutils/src'
      ]
    }
  },

  // source bundle
  source : {
    src: [],
    dest: config.build + '/' + config.src + '/hazdev-leaflet.js',
    options: {
      alias: EXPORTS
    }
  },

  // test bundle
  test: {
    src: config.test + '/test.js',
    dest: config.build + '/' + config.test + '/test.js',
    options: {
      external: EXPORTS
    }
  }
};

module.exports = browerify;

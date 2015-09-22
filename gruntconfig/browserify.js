'use strict';

var config = require('./config');


var EXPORTS = [
  './node_modules/leaflet/dist/leaflet-src.js:leaflet'
].concat(
  [
    'leaflet/Leaflet',
    'leaflet/ArcIdentify',
    'leaflet/control/Fullscreen',
    'leaflet/control/MousePosition',
    'leaflet/layer/ArcTile',
    'leaflet/layer/EsriGrayscale',
    'leaflet/layer/EsriTerrain',
    'leaflet/layer/HazardFault',
    'leaflet/layer/HazardFault2008',
    'leaflet/layer/HazardFault2014',
    'leaflet/layer/OpenAerialMap',
    'leaflet/layer/OpenStreetMap'
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

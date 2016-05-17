'use strict';

var config = require('./config');


var EXPORTS = [
  './node_modules/leaflet/dist/leaflet-src.js:leaflet'
].concat(
  [
    'leaflet/ArcIdentify',
    'leaflet/Leaflet',
    'leaflet/UtfGrid',

    'leaflet/control/Fullscreen',
    'leaflet/control/HazDevLayers',
    'leaflet/control/MousePosition',
    'leaflet/control/ZoomToControl',

    'leaflet/layer/ArcTile',
    'leaflet/layer/AsynchronousGeoJson',
    'leaflet/layer/Grayscale',
    'leaflet/layer/HazardFault',
    'leaflet/layer/HazardFault2008',
    'leaflet/layer/HazardFault2014',
    'leaflet/layer/MouseOverLayer',
    'leaflet/layer/OpenAerialMap',
    'leaflet/layer/OpenStreetMap',
    'leaflet/layer/TectonicPlates',
<<<<<<< 9ec8e5a92b019c99b599cc81231e68533999901f
    'leaflet/layer/UsFault',
    'leaflet/layer/UsHazard'
=======
    'leaflet/layer/Terrain',
    'leaflet/layer/UsFault'
>>>>>>> changed name of gray scale layer and added to terrain layers
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

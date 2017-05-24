/* global L */
'use strict';


require('leaflet/layer/LegendLayer');

var _PLATES_URL = 'https://earthquake.usgs.gov/basemap/tiles/plates';


var TectonicPlates = function (options) {
  options = options || {};

  return L.legendLayer(_PLATES_URL + '/{z}/{x}/{y}.png', options);
};


L.tectonicPlates = TectonicPlates;

module.exports = TectonicPlates;

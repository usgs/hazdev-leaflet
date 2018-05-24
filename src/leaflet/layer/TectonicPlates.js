/* global L */
'use strict';


require('leaflet/layer/LegendLayer');

var _PLATES_URL = 'https://earthquake.usgs.gov/basemap/tiles/plates';


var TectonicPlates = function (options) {
  var url;
  options = options || {};

  url = options.tileUrl || (_PLATES_URL + '/{z}/{x}/{y}.png');

  return L.legendLayer(url, options);
};


L.tectonicPlates = TectonicPlates;

module.exports = TectonicPlates;

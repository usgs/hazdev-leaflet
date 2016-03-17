/* global L */
'use strict';


var _PLATES_URL = 'http://earthquake.usgs.gov/basemap/tiles/plates';


var TectonicPlates = function (options) {
  options = options || {};

  return L.tileLayer(_PLATES_URL + '/{z}/{x}/{y}.png', options);
};


L.tectonicPlates = TectonicPlates;

module.exports = TectonicPlates;

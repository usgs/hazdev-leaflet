/* global L */
'use strict';


require('leaflet/layer/LegendLayer');

var _TILE_URL = 'https://earthquake.usgs.gov/basemap/tiles/ushaz';


var UsHazard = function (options) {
  options = options || {};

  return L.legendLayer(_TILE_URL + '/{z}/{x}/{y}.png', options);
};


L.usHazard = UsHazard;

module.exports = UsHazard;

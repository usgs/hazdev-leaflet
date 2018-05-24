/* global L */
'use strict';


require('leaflet/layer/LegendLayer');

var _TILE_URL = 'https://earthquake.usgs.gov/basemap/tiles/ushaz';


var UsHazard = function (options) {
  var url;
  options = options || {};

  url = options.tileUrl || (_TILE_URL + '/{z}/{x}/{y}.png');

  return L.legendLayer(url, options);
};


L.usHazard = UsHazard;

module.exports = UsHazard;

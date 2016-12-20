/* global L */
'use strict';


var _TILE_URL = 'https://earthquake.usgs.gov/basemap/tiles/ushaz';


var UsHazard = function (options) {
  options = options || {};

  return L.tileLayer(_TILE_URL + '/{z}/{x}/{y}.png', options);
};


L.usHazard = UsHazard;

module.exports = UsHazard;

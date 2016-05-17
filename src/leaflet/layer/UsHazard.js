/* global L */
'use strict';


var _PLATES_URL = 'http://earthquake.usgs.gov/basemap/tiles/ushaz';


var UsHazard = function (options) {
  options = options || {};

  return L.tileLayer(_PLATES_URL + '/{z}/{x}/{y}.png', options);
};


L.usHazard = UsHazard;

module.exports = UsHazard;

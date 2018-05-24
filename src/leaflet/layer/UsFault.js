/* global L */
'use strict';


var MouseOverLayer = require('leaflet/layer/MouseOverLayer'),
    Util = require('hazdev-webutils/src/util/Util');


var _FAULTS_URL = 'https://dev01-earthquake.cr.usgs.gov/basemap/tiles/faults';


var UsFault = function (options) {
  options = Util.extend({
    tileUrl: _FAULTS_URL + '/{z}/{x}/{y}.png',
    dataUrl: _FAULTS_URL + '/{z}/{x}/{y}.grid.json?callback={cb}',
    tiptext: '{NAME}'
  }, options);

  return MouseOverLayer(options);
};


L.usFault = UsFault;

module.exports = UsFault;

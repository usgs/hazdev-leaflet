'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('util/Util');


var _CARTODB,
    _DEFAULTS,
    _ESRI,
    _PROVIDER_INFO;


_CARTODB = 'cartodb';
_ESRI = 'esri';
_PROVIDER_INFO = {};

_DEFAULTS = {
  provider: _ESRI
};

_PROVIDER_INFO[_CARTODB] = {
  url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  options: {
    subdomains: ['server', 'services'],
    attribution: '<a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">' +
        'CartoDB</a>'
  }
};

_PROVIDER_INFO[_ESRI] = {
  url: '//{s}.arcgisonline.com/ArcGIS/rest/services/' +
      'Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.jpg',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Sources: Esri, DeLorme, HERE, MapmyIndia,  &copy; ' +
        'OpenStreetMap contributors, and the GIS community'
  }
};


/**
* Factory for Grayscale base layer.
*/
var Grayscale = function (options) {
  try {
    return TileProvider.create(
      _PROVIDER_INFO,
      Util.extend({}, _DEFAULTS, options)
    );
  } catch (e) {
    return TileProvider.create(
      _PROVIDER_INFO,
      _DEFAULTS
    );
  }
};


Grayscale.CARTODB = _CARTODB;
Grayscale.ESRI = _ESRI;


module.exports = Grayscale;

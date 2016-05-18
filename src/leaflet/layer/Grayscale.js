/* global L */
'use strict';


var Util = require('util/Util');

var _CARTODB = 'cartodb',
    _ESRI = 'esri';

var _PROVIDER_INFO = {
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

_PROVIDER_INFO[_CARTODB] = {
  url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  options: {
    subdomains: ['server', 'services'],
    attribution: '<a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">' +
        'CartoDB</a>'
  }
};


var _DEFAULTS = {
  provider: _ESRI
};


/**
* Factory for Grayscale base layer.
*/
var Grayscale = function (options) {
  var layer,
      layerOptions,
      provider;

  options = Util.extend({}, _DEFAULTS, options);

  provider = options.provider || {};
  layer = _PROVIDER_INFO[provider];
  layerOptions = Util.extend({}, layer.options, options);


  return L.tileLayer(layer.url, layerOptions);
};


Grayscale.ESRI = _ESRI;
Grayscale.CARTODB = _CARTODB;

L.Grayscale = Grayscale;


module.exports = Grayscale;

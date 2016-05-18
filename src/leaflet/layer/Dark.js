/* global L */
'use strict';


var Util = require('util/Util');

var _DARK = 'dark';

var _PROVIDER_INFO = {
};

_PROVIDER_INFO[_DARK] = {
  url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
  options: {
    subdomains: 'abcd',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">' +
      'OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">' +
      'CartoDB</a>'
  }
};

var _DEFAULTS = {
  provider: _DARK
};


/**
 * Factory for Dark base layer.
 */
var Dark = function (options) {
  var layer,
      layerOptions,
      provider;

  options = Util.extend({}, _DEFAULTS, options);

  provider = options.provider || {};
  layer = _PROVIDER_INFO[provider];
  layerOptions = Util.extend({}, layer.options, options);

  return L.tileLayer(layer.url, layerOptions);
};

Dark.DARK = _DARK;

L.Dark = Dark;


module.exports = Dark;

'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('util/Util');


var _DARK,
    _DEFAULTS,
    _PROVIDER_INFO;


_DARK = 'dark';
_PROVIDER_INFO = {};

_DEFAULTS = {
  provider: _DARK
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


/**
 * Factory for Dark base layer.
 */
var Dark = function (options) {
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


Dark.DARK = _DARK;


module.exports = Dark;

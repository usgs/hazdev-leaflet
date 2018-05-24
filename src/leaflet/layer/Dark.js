'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('hazdev-webutils/src/util/Util');


var _DARK,
    _DEFAULTS,
    _PROVIDER_INFO;


_DARK = 'dark';
_PROVIDER_INFO = {};

_DEFAULTS = {
  provider: _DARK
};

_PROVIDER_INFO[_DARK] = {
  url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}@2x.png',
  options: {
    subdomains: 'abcd',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> &copy; <a href="https://cartodb.com/attributions">' +
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

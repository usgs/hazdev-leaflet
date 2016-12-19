'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('util/Util');

var _DEFAULTS,
    _ESRI,
    _MAPQUEST,
    _PROVIDER_INFO;

_ESRI = 'esri';
_MAPQUEST = 'mapquest';
_PROVIDER_INFO = {};

_DEFAULTS = {
  provider: _ESRI
};

_PROVIDER_INFO[_ESRI] = {
  url: 'https://{s}.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Imagery/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, ' +
        'USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the ' +
        'GIS User Community'
  }
};

_PROVIDER_INFO[_MAPQUEST] = {
  url: 'https://otile{s}-s.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg',
  options: {
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="https://wiki.openstreetmap.org/wiki/Legal_FAQ#3a.' +
        '_I_would_like_to_use_OpenStreetMap_maps.' +
        '_How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }
};


/**
* Factory for Satellite base layer.
*/
var Satellite = function (options) {
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


Satellite.ESRI = _ESRI;
Satellite.MAPQUEST = _MAPQUEST;


module.exports = Satellite;

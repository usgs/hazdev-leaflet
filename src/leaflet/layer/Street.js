'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('hazdev-webutils/src/util/Util');


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
      'World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, ' +
        'Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, ' +
        'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the ' +
        'GIS User Community'
  }
};

_PROVIDER_INFO[_MAPQUEST] = {
  url: 'https://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg',
  options: {
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="https://wiki.openstreetmap.org/wiki/' +
        'Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps.' +
        '_How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }
};


/**
* Factory for Street base layer.
*/
var Street = function (options) {
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


Street.ESRI = _ESRI;
Street.MAPQUEST = _MAPQUEST;


module.exports = Street;

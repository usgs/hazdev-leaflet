'use strict';


var TileProvider = require('leaflet/layer/TileProvider'),
    Util = require('util/Util');


var _DEFAULTS,
    _ESRI,
    _NATGEO,
    _PROVIDER_INFO;


_ESRI = 'esri';
_NATGEO = 'natgeo';
_PROVIDER_INFO = {};

_DEFAULTS = {
  provider: _ESRI
};

_PROVIDER_INFO[_ESRI] = {
  url: 'https://{s}.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, ' +
        'Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, ' +
        'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the ' +
        'GIS User Community'
  }
};

_PROVIDER_INFO[_NATGEO] = {
  url: 'https://{s}.arcgisonline.com/arcgis/rest/services/' +
      'NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Content may not reflect National Geographic\'s ' +
          'current map policy. Sources: National Geographic, Esri, ' +
          'DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, ' +
          'GEBCO, NOAA, increment P Corp.'
  }
};



/**
 * Factory for Terrain base layer.
 */
var Terrain = function (options) {
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


Terrain.ESRI = _ESRI;
Terrain.NATGEO = _NATGEO;


module.exports = Terrain;

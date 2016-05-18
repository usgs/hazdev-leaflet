/* global L */
'use strict';


var Util = require('util/Util');

var _NATGEO_WORLD = 'natGeo_world_map',
    _ESRI_TOPO = 'world_topo_map';

var _PROVIDER_INFO = {
};

_PROVIDER_INFO[_NATGEO_WORLD] = {
  url: 'http://{s}.arcgisonline.com/arcgis/rest/services/' +
      'NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Content may not reflect National Geographic\'s ' +
          'current map policy. Sources: National Geographic, Esri, ' +
          'DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, ' +
          'GEBCO, NOAA, increment P Corp.'
  }
};

_PROVIDER_INFO[_ESRI_TOPO] = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, ' +
      'Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance ' +
      'Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User ' +
      'Community'
  }
};

var _DEFAULTS = {
  provider: _NATGEO_WORLD
};


/**
 * Factory for Terrain base layer.
 */
var Terrain = function (options) {
  var layer,
      layerOptions,
      provider;

  options = Util.extend({}, _DEFAULTS, options);

  provider = options.provider || {};
  layer = _PROVIDER_INFO[provider];
  layerOptions = Util.extend({}, layer.options, options);


  return L.tileLayer(layer.url, layerOptions);
};

Terrain.NATGEO_WORLD = _NATGEO_WORLD;
Terrain.ESRI_TOPO = _ESRI_TOPO;

L.Terrain = Terrain;

module.exports = Terrain;

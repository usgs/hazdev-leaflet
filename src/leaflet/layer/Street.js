/* global L */
'use strict';


var Util = require('util/Util');

var _ESRI = 'esri_street',
    _MAP_QUEST = 'open_street_map';

var _PROVIDER_INFO = {
};

_PROVIDER_INFO[_MAP_QUEST] = {
  url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg',
  options: {
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="http://wiki.openstreetmap.org/wiki/' +
        'Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps.' +
        '_How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }
};

_PROVIDER_INFO[_ESRI] = {
  url: 'https://{s}.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, ' +
      'Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance ' +
      'Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User ' +
      'Community'
  }
};

var _DEFAULTS = {
  provider: _MAP_QUEST
};


/**
* Factory for Street base layer.
*/
var Street = function (options) {
  var layer,
      layerOptions,
      provider;

  options = Util.extend({}, _DEFAULTS, options);

  provider = options.provider || {};
  layer = _PROVIDER_INFO[provider];
  layerOptions = Util.extend({}, layer.options, options);


  return L.tileLayer(layer.url, layerOptions);
};


Street.ESRI = _ESRI;
Street.MAP_QUEST = _MAP_QUEST;

L.Street = Street;


module.exports = Street;

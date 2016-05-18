/* global L */
'use strict';


var Util = require('util/Util');

var _ESRI = 'esri',
    _MAP_QUEST = 'map_quest';

var _PROVIDER_INFO = {
};

_PROVIDER_INFO[_MAP_QUEST] = {
  url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg',
  options: {
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a.' +
        '_I_would_like_to_use_OpenStreetMap_maps.' +
        '_How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }
};

_PROVIDER_INFO[_ESRI] = {
  url: '//server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Imagery/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: '',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, ' +
        'USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the ' +
        'GIS User Community'
  }
};


var _DEFAULTS = {
  provider: _MAP_QUEST
};


/**
* Factory for Satellite base layer.
*/
var Satellite = function (options) {
  var layer,
      layerOptions,
      provider;

  options = Util.extend({}, _DEFAULTS, options);

  provider = options.provider || {};
  layer = _PROVIDER_INFO[provider];
  layerOptions = Util.extend({}, layer.options, options);


  return L.tileLayer(layer.url, layerOptions);
};


Satellite.ESRI = _ESRI;
Satellite.CARTODB = _MAP_QUEST;

L.Satellite = Satellite;


module.exports = Satellite;

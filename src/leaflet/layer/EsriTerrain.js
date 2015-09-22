'use strict';


var L = require('leaflet'),
    Util = require('util/Util');


/**
 * Factory for ESRI Terrain base layer.
 */
var EsriTerrain = function (options) {
  options = Util.extend({
    subdomains: ['server', 'services'],
    attribution: 'Content may not reflect National Geographic\'s ' +
          'current map policy. Sources: National Geographic, Esri, ' +
          'DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, ' +
          'GEBCO, NOAA, increment P Corp.'
  }, options);

  return L.tileLayer('http://{s}.arcgisonline.com/arcgis/rest/services/' +
      'NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', options);
};


L.esriTerrain = EsriTerrain;


module.exports = EsriTerrain;

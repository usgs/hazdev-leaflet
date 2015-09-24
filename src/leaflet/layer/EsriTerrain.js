'use strict';

var L = require('leaflet');

// this file defines L.ArcGisOnline
require('./ArcGisOnline');


/**
 * ESRI Terrain base layer.
 */
var EsriTerrain = L.ArcGisOnline.extend({

  options: {
    attribution: 'Content may not reflect National Geographic\'s' +
        ' current map policy. Sources: National Geographic, Esri,' +
        ' DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN,' +
        ' GEBCO, NOAA, increment P Corp.',
    service: 'NatGeo_World_Map'
  }

});


L.EsriTerrain = EsriTerrain;

L.esriTerrain = function (options) {
  return new EsriTerrain(options);
};


module.exports = EsriTerrain;

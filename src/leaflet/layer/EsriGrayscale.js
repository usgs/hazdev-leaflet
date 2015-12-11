'use strict';

var L = require('leaflet');

// this file defines L.ArcGisOnline
require('./ArcGisOnline');


/**
 * ESRI Grayscale base layer.
 */
var EsriGrayscale = L.ArcGisOnline.extend({

  options: {
    attribution: 'Sources: Esri, DeLorme, HERE, MapmyIndia, &copy;' +
        ' OpenStreetMap contributors, and the GIS community',
    service: 'Canvas/World_Light_Gray_Base'
  }

});


L.EsriGrayscale = EsriGrayscale;

L.esriGrayscale = function (options) {
  return new EsriGrayscale(options);
};


module.exports = EsriGrayscale;

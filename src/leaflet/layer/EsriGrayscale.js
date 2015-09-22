'use strict';


var L = require('leaflet'),
    Util = require('util/Util');


/**
 * Factory for ESRI Grayscale base layer.
 */
var EsriGrayscale = function (options) {
  options = Util.extend({
    subdomains: ['server', 'services'],
    attribution: 'Sources: Esri, DeLorme, HERE, MapmyIndia,  &copy; ' +
        'OpenStreetMap contributors, and the GIS community'
  }, options);

  return L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/' +
      'Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.jpg', options);
};


L.esriGrayscale = EsriGrayscale;


module.exports = EsriGrayscale;

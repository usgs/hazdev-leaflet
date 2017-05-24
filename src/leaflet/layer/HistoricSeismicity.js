/* global L */
'use strict';

var Util = require('util/Util');

require('leaflet/layer/LegendLayer');

var _HISTORIC_SEISMICITY_URL = 'https://earthquake.usgs.gov/arcgis/rest' +
    '/services/eq/catalog_2015/MapServer/tile/{z}/{y}/{x}';


/**
 * Historic seismicity layer.
 *
 *
 * @param options {Object}
 *     Any options that could be provided to an L.tileLayer
 */
var HistoricSeismicity = function (options) {
  options = Util.extend({
    tileUrl: _HISTORIC_SEISMICITY_URL
  }, options);

  return L.legendLayer(options.tileUrl, options);
};


module.exports = HistoricSeismicity;

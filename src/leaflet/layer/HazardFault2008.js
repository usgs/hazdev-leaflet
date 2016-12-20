/* global L */
'use strict';


var HazardFault = require('leaflet/layer/HazardFault'),
    Util = require('util/Util');


/**
 * Sub class that configures the url for 2008 Hazard Faults.
 */
var HazardFault2008 = function (options) {
  return new HazardFault(Util.extend({
    url: 'https://earthquake.usgs.gov/arcgis/rest/services/haz/hazfaults2008'
  }, options));
};


L.HazardFault2008 = HazardFault2008;

L.hazardFault2008 = function (options) {
  return new HazardFault2008(options);
};


module.exports = HazardFault2008;

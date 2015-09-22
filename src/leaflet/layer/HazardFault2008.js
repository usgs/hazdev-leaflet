'use strict';


var L = require('leaflet'),
    HazardFault = require('./HazardFault'),
    Util = require('util/Util');


/**
 * Sub class that configures the url for 2008 Hazard Faults.
 */
var HazardFault2008 = function (options) {
  return new HazardFault(Util.extend({
    url: 'http://geohazards.usgs.gov/ArcGIS/rest/services/hazfaults'
  }, options));
};


L.HazardFault2008 = HazardFault2008;

L.hazardFault2008 = function (options) {
  return new HazardFault2008(options);
};


module.exports = HazardFault2008;

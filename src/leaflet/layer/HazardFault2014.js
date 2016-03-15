/* global L */
'use strict';


var HazardFault = require('./HazardFault'),
    Util = require('util/Util');


/**
 * Sub class that configures the url for 2014 Hazard Faults.
 */
var HazardFault2014 = function (options) {
  return new HazardFault(Util.extend({
    url: 'http://geohazards.usgs.gov/ArcGIS/rest/services/hazfaults2014'
  }, options));
};


L.HazardFault2014 = HazardFault2014;

L.hazardFault2014 = function (options) {
  return new HazardFault2014(options);
};


module.exports = HazardFault2014;

'use strict';

var L = require('leaflet'),
    ArcTile = require('./ArcTile'),
    Util = require('util/Util');


var _SLIP_SENSE_MAP = {
	'0': 'Unassigned',
	'1': 'Strike Slip',
	'2': 'Thrust (Reverse)',
	'3': 'Normal'
};

var _UNKNOWN = '<span class="unknown">unspecified</span>';


var HazardFault = ArcTile.extend({
  _formatPopup: function (result) {
    var markup = [];

    result.forEach(function (fault) {
      var attr = fault.attributes,
          dip,
          dipDirection,
          name,
          slipRate,
          slipSense,
          url;

      name = attr.NAME || _UNKNOWN;
      dip = attr.DISP_DIPS || _UNKNOWN;
      dipDirection = attr.DIP_DIR || '';
      slipRate = attr.DISP_SING || _UNKNOWN;
      slipSense = _SLIP_SENSE_MAP[attr.SLIP_SENSE] || _UNKNOWN;
      url = attr.CFM_URL;

      if (url) {
        name = '<a target="_blank" href="' + url + '">' + name + '</a>';
      }

      markup.push(
        '<li>' +
          '<span class="fault-name">' + name + '</span>' +
          '<dl class="horizontal">' +
            '<dt class="fault-dip">Dip</dt>' +
            '<dd class="fault-dip">' +
              dip + dipDirection +
            '</dd>' +
            '<dt class="fault-slip-rate">Slip Rate (mm/yr)</dt>' +
            '<dd class="fault-slip-rate">' +
              slipRate +
            '</dd>' +
            '<dt class="fault-slip-sense">Slip Sense</dt>' +
            '<dd class="fault-slip-sense">' +
              slipSense +
            '</dd>' +
          '</dl>' +
        '</li>'
      );

    });

    return '<ul class="no-style hazard-fault-layer-popup">' +
        markup.join('') +
        '</ul>';
  }

});


L.HazardFault = HazardFault;

L.hazardFault = function (options) {
  return new HazardFault(options);
};

L.hazardFault2008 = function (options) {
  return new HazardFault(Util.extend({
    url: 'http://geohazards.usgs.gov/ArcGIS/rest/services/hazfaults'
  }, options));
};

L.hazardFault2014 = function (options) {
  return new HazardFault(Util.extend({
    url: 'http://geohazards.usgs.gov/ArcGIS/rest/services/hazfaults2014'
  }, options));
};


module.exports = HazardFault;

/* global L */
'use strict';

var Util = require('util/Util');


var DEFAULTS = {
  legend: null
};


var LegendLayer = L.TileLayer.extend({

  initialize: function (url, options) {
    options = Util.extend({}, DEFAULTS, options);

    this._legends = options.legends || null;

    L.TileLayer.prototype.initialize.call(this, url, options);
  },

  getLegends: function () {
    return this._legends;
  }
});


L.LegendLayer = LegendLayer;

L.legendLayer = function (url, options) {
  return new L.LegendLayer(url, options);
};


module.exports = L.legendLayer;

/* global L */
'use strict';

var Util = require('util/Util');


var DEFAULTS = {
  legend: '<p>No legend available.</p>'
};


var LegendLayer = L.TileLayer.extend({

  initialize: function (url, options) {
    options = Util.extend({}, DEFAULTS, options);

    this._legend = options.legend || null;

    L.TileLayer.prototype.initialize.call(this, url, options);
  },

  getLegend: function () {
    return this._legend;
  }
});


L.LegendLayer = LegendLayer;

L.legendLayer = function (url, options) {
  return new L.LegendLayer(url, options);
};


module.exports = L.legendLayer;

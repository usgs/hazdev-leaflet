'use strict';


var L = require('leaflet');

/**
 * ArcGisOnline base layer.
 */
var ArcGisOnline = L.TileLayer.extend({

  /**
   * @param options {Object}
   * @param options.attribution {String}
   *        service attribution.
   * @param options.service {String}
   *        service name.
   */
  initialize: function (options) {
    var url;

    L.Util.setOptions(this, options);
    url = 'http://{s}.arcgisonline.com/ArcGIS/rest/services/' +
        this.options.service + '/MapServer/tile/{z}/{y}/{x}.jpg';
    L.TileLayer.prototype.initialize.call(this, url, options);
  },

  options: {
    service: null,
    subdomains: [
      'server',
      'services'
    ]
  }

});


L.ArcGisOnline = ArcGisOnline;

L.arcGisOnline = function (options) {
  return new ArcGisOnline(options);
};


module.exports = ArcGisOnline;

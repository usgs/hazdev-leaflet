'use strict';

var L = require('leaflet');


var _URL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';


var OpenStreetMap = L.TileLayer.extend({

  initialize: function (options) {
    L.TileLayer.prototype.initialize.call(this, _URL, options);
  },

  options: {
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }

});


L.OpenStreetMap = OpenStreetMap;

L.openStreetMap = function (options) {
  return new OpenStreetMap(options);
};


module.exports = OpenStreetMap;

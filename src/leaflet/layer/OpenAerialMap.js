'use strict';


var L = require('leaflet'),
    Util = require('util/Util');


/**
 * Factory for Mapquest Open Aerial Map base layer.
 */
var OpenAerialMap = function (options) {
  options = Util.extend({
    subdomains: '1234',
    attribution: 'Data, imagery and map information provided by MapQuest,' +
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
        ' and contributors,' +
        ' <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">' +
        'ODbL</a>'
  }, options);

  return L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/' +
          '{z}/{x}/{y}.jpg', options);
};


L.openAerialMap = OpenAerialMap;


module.exports = OpenAerialMap;

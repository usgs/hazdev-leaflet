/* global L */
'use strict';

var Util = require('util/Util');

/**
 *
 */
 var CartoDBGrayScale = function (options) {
   options = Util.extend({
     subdomains: [
       'server',
       'services'
     ],
     attribution: '<a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">' +
        'CartoDB</a>'
   }, options);

   return L.tileLayer('http://{s}.basemaps.cartocdn.com/' +
      'light_all/{z}/{x}/{y}.png', options);
 };

 L.cartodb = CartoDBGrayScale;

 module.exports = CartoDBGrayScale;

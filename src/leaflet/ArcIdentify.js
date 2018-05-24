/* global L */
'use strict';

var Util = require('hazdev-webutils/src/util/Util'),
    Xhr = require('hazdev-webutils/src/util/Xhr');


var DEFAULTS = {
  srid: 4326
};


var ArcIdentify = function (options) {
  var _this,
      _initialize,

      _url,
      _srid;

  _this = {};

  _initialize = function (options) {
    options = Util.extend({}, DEFAULTS, options);

    _srid = options.srid;
    _url = options.url;
  };


  _this.identify = function (options) {
    var params;

    params = {};
    params.f = 'json';
    params.geometry = JSON.stringify({
      x: options.longitude,
      y: options.latitude,
      spatialReference: {
        wkid: _srid
      }
    });
    params.geometryType = 'esriGeometryPoint';
    params.imageDisplay = '640,480,96';
    params.layers = 'all';
    params.mapExtent = JSON.stringify({
      xmin: options.longitude - 5,
      ymin: options.latitude - 5,
      xmax: options.longitude + 5,
      ymax: options.latitude + 5,
      spatialReference: {
        wkid: _srid
      }
    });
    params.returnGeometry = true;
    params.sr = _srid;
    params.tolerance = '3';

    Xhr.jsonp(Util.extend({}, options, {
      url: _url,
      data: params
    }));
  };

  _initialize(options);
  options = null;
  return _this;
};


L.ArcIdentify = ArcIdentify;

L.arcIdentify = function (options) {
  return new ArcIdentify(options);
};


module.exports = ArcIdentify;

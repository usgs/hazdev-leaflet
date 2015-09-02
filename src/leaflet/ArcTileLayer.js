'use strict';

var L = require('leaflet'),
    ArcIdentify = require('leaflet/ArcIdentify'),
    Util = require('util/Util');

var DEFAULTS = {
  enableIdentify: false,
  formatPopup: JSON.stringify
};


var ArcTileLayer = function (options) {
  var _this,
      _initialize,

      _enableIdentify,
      _identify,
      _map,
      _tileLayer,
      _url,

      _formatPopup,
      _hidePopup,
      _showPopup,
      _onClick;

  _initialize = function (options) {
    options = Util.extend({}, DEFAULTS, options);

    _enableIdentify = options.enableIdentify;
    _formatPopup = options.formatPopup;
    _map = options.map;
    _url = options.url;

    _tileLayer = L.tileLayer(
        _url + '/MapServer/tile/{z}/{y}/{x}',
        options.tileLayerOptions);
    _tileLayer.addTo(_map);

    if (_enableIdentify) {
      _identify = ArcIdentify({
        url: _url + '/MapServer/identify'
      });
      _map.on('click', _onClick);
    }
  };

  _hidePopup = function () {
    _map.closePopup();
  };

  _showPopup = function (latlng, result) {
    var results;

    if (result && result.results) {
      results = result.results;
    }
    results = results || [];

    if (results.length === 0) {
      _hidePopup();
    } else {
      _map.openPopup(_formatPopup(results[0]), latlng);
    }
  };

  _onClick = function (evt) {
    var latlng = evt.latlng;

    _identify.identify({
      latitude: latlng.lat,
      longitude: latlng.lng,
      success: function (result) {
        console.log(result);
        if (result.results.length === 0) {
          _hidePopup();
        } else {
          _showPopup(latlng, result);
        }
      },
      error: _hidePopup
    });
  };


  _initialize(options);
  options = null;
  return _this;
};

module.exports = ArcTileLayer;

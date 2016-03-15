/* global L */
'use strict';

var ArcIdentify = require('../ArcIdentify'),
    Util = require('util/Util');


var DEFAULTS = {
  clickable: false
};


var ArcTile = L.TileLayer.extend({

  initialize: function (options) {
    options = Util.extend({}, DEFAULTS, options);
    this._clickable = options.clickable;
    this._formatPopup = options.formatPopup || this._formatPopup;
    this._map = null;
    this._url = options.url;

    this._service = ArcIdentify({
      url: this._url + '/MapServer/identify'
    });

		L.TileLayer.prototype.initialize.call(this,
        this._url + '/MapServer/tile/{z}/{y}/{x}', options);
  },

  onAdd: function (map) {
    L.TileLayer.prototype.onAdd.call(this, map);
    this._map = map;
    if (this._clickable) {
      this._map.on('click', this._onClick, this);
    }
  },

  onRemove: function (map) {
    this._map.off('click', this._onClick, this);
    L.TileLayer.prototype.onRemove.call(this, map);
  },

  _closePopup: function () {
    if (this._map !== null) {
      this._map.closePopup();
    }
  },

  _formatPopup: function (result) {
    return JSON.stringify(result);
  },

  _onClick: function (evt) {
    var latlng = evt.latlng,
        _this = this;

    this._service.identify({
      latitude: latlng.lat,
      longitude: latlng.lng,
      success: function (result) {
        if (result.results.length === 0) {
          _this._closePopup();
        } else {
          _this._openPopup(latlng, result);
        }
      },
      error: function () {
        _this._closePopup();
      }
    });
  },

  _openPopup: function (latlng, result) {
    var results;

    if (this._map === null) {
      return;
    }

    if (result && result.results) {
      results = result.results;
    }
    results = results || [];

    if (results.length === 0) {
      this._closePopup();
    } else {
      this._map.openPopup(this._formatPopup(results), latlng);
    }
  }

});


L.ArcTile = ArcTile;

L.arcTile = function (options) {
  return new ArcTile(options);
};


module.exports = ArcTile;

/* global L */
'use strict';


var Util = require('util/Util');

var _CLASS_NAME = 'zoomto-control';

var _DEFAULTS = {
  'locations': [
      {
        title:'U.S.',
        id: 'us',
        bounds:[[50,-125], [24.6,-65]]
      },
      {
        title:'World',
        id: 'world',
        bounds:[[70,20],[-70,380]]
      }
    ],
  'position': 'topleft'
};


/**
 * ZoomToControl
 *    A control that zooms to a specific region on the map.
 *
 * @params options {Object}
 *    object containing other parameters passed in
 * @params options.locations
 *    array of objects
 * @params options.locations[] {Object}
 *    Array of title/bounds objects.
 * @params options.locations[].title {string}
 *    The title of the bounds to be zoomed to.
* @params options.locations[].id {string}
 *    A unique id for identifying the zoomto region.
 * @params options.locations[].bounds {array}
 *    An Array of coordinate bounds.
 */
var ZoomToControl = L.Control.extend({
  initialize: function (options) {
    L.Util.setOptions(this, L.Util.extend({}, _DEFAULTS, options));
  },


  /**
   * Set the zoom extents
   *    triggered by a change event.
   *
   * @params e {event}
   *    selectedIndex: the index of the selected item
   */
  _setZoom: function (e) {
    var i,
        len,
        locations,
        value;

    console.log('setZoom');

    locations = (this.options || {}).locations || [];
    len = locations.length;
    e = Util.getEvent(e);
    value = e.target.value;

    for (i = 0; i < len; i++) {
      if (locations[i].id === value) {
        this._map.fitBounds(locations[i].bounds);
        break;
      }
    }

    // Set the select box back to Zoom to
    e.target.selectedIndex = 0;
  },


  /**
   * onAdd Add the select element and container to the map
   *
   * @params map {leaflet.map}
   */
  onAdd: function (map) {
    var container,
        i,
        len,
        locations,
        option,
        select;

    locations = (this.options || {}).locations || [];
    len = locations.length;

    container = document.createElement('div');
    container.classList.add(_CLASS_NAME);

    // Add Select element
    select = container.appendChild(document.createElement('select'));
    select.classList.add(_CLASS_NAME + '-list');

    // Create default option (Zoom To)
    option = select.appendChild(document.createElement('option'));
    option.innerHTML = 'Zoom to...';
    option.value = 'jump';

    // Add all options from locations.
    for (i = 0; i < len; i++) {
      option = select.appendChild(document.createElement('option'));
      option.innerHTML = locations[i].title;
      option.value = locations[i].id;
    }

    this._container = container;
    this._map = map;

    // Disable propagation for old style mouse/touch
    // Includes ie11
    L.DomEvent.disableClickPropagation(container);

    // Disable propagation for ie11/microsoft touch
    L.DomEvent
      .on(select, 'change', this._setZoom, this);

    return container;
  },

  /**
   * onRemove
   *    Removes listeners from dom.
   */
  onRemove: function () {
    var select;

    select = this._container.querySelector('.' + _CLASS_NAME + '-list');

    L.DomEvent
      .off(select, 'change', this._setZoom);

    this._container = null;
    this._map = null;
  }
});


L.Control.ZoomToControl = ZoomToControl;

L.control.zoomToControl = function (options) {
  return new ZoomToControl(options);
};

module.exports = L.control.zoomToControl;

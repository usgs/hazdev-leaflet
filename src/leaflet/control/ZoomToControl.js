/* global L */
'use strict';
var Util = require('util/Util');

var CLASS_NAME = 'location-zoomto-control';

var DEFAULTS = {
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
  include: L.Mixin.Events,

  initialize: function (options) {
    L.Util.setOptions(this, L.Util.extend({}, DEFAULTS, options));
  },

  /**
   * onAdd Add the select element and container to the map
   *
   * @params map {leaflet.map}
   */
  onAdd: function (map) {
    var container,
        locations,
        option,
        options,
        select;

    options = this.options;
    locations = options.locations;

    container = document.createElement('div');
    container.classList.add('zoomto-control');
    container.classList.add(CLASS_NAME);
    //Add Select element
    select = document.createElement('select');
    select.classList.add(CLASS_NAME + '-list');
    container.appendChild(select);
    // Create default option (Zoom To)
    option = document.createElement('OPTION');
    option.text = 'Zoom to...';
    option.value = 'jump';
    select.appendChild(option);
    // Add all options from locations.
    for(var i = 0; i < locations.length; ++i) {
        option = document.createElement('OPTION');
        option.text = locations[i].title;
        option.value = locations[i].id;
        select.options.add(option);
      }

    this._container = container;
    this._map = map;
    //Disable propagation for old style mouse/touch
    //Includes ie11
    L.DomEvent.disableClickPropagation(container);

    //Disable propagation for ie11/microsoft touch
    L.DomEvent
      .on(select, 'change', this._setZoom, this)
      .on(select, 'pointerdown', this._onAddPointerDownEvent, this);

    return container;
  },

  /**
   * On Add Pointer Down Event
   *    Disable propagation for ie11/microsoft touch
   * @params e {event}
   *
   * @notes Changed from an inline function, to a seperate function for
   *    removeListener to work.
   */
  _onAddPointerDownEvent: function (e) {
    var evt = e ? e : window.event;
        evt.returnValue = false;
        evt.cancelBubble = true;
    },

  /**
   * onRemove
   *    Removes listeners from dom.
   */
  onRemove: function () {
    var container,
        map,
        select;

    container = this._container;
    map = this._map;
    select = container.querySelector('.' + CLASS_NAME +'-list');

    L.DomEvent.removeListener(select, 'change', this._setZoom);
    L.DomEvent.removeListener(select, 'pointerdown',
        this._onAddPointerDownEvent);

    this._container = null;
    this._map = null;
  },

  /**
   * Set the zoom extents
   *    triggered by a change event.
   *
   * @params e {event}
   *    selectedIndex: the index of the selected item
   */
  _setZoom: function (e) {
    var index,
        location,
        locations,
        value;

    locations = this.options.locations;
    e = Util.getEvent(e);
    index = e.target.selectedIndex;
    value = e.target.value;

    for (location=0; location < locations.length; location++) {
      if (locations[location].id === value) {
        this._map.fitBounds(locations[location].bounds);
        break;
      }
    }

    // Set the set box back to Zoom to
    e.target.selectedIndex = 0;
  }

});


L.Control.ZoomToControl = ZoomToControl;

L.control.zoomToControl = function (options) {
  return new ZoomToControl(options);
};

module.exports = L.control.zoomToControl;

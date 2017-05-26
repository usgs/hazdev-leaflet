/* global L */
'use strict';

/**
 * Adds a Legend control to the map with a hover/clickable toggle
 *
 * This control accepts a position, and an array of "legends" to display
 * in the expandable control. Each legend is represented as an object, with
 * the following attributes:
 *
 *    "title" - {String} styled as a header/title for the legend
 *    "image" - {String} a relative path to an image that will be displayed
 *    "el"    - {String} or {Object} a DOM string or DOM object that will be
 *              appened to the Legend control.
 *
 * You must use at least one of the legend attributes, but there is no limit
 * to how many you use. You can combine all three.
 *
 */
var Legend = L.Control.extend({
  options: {
    position: 'topright',
    legends: null
  },

  _addLegend: function (legend) {
    var legendItem;

    // No legend to display
    if (legend === null) {
      return;
    }

    this._removeMessage();

    legendItem = document.createElement('li');

    // Add a DOM Element or DOM String
    if (typeof legend === 'object') {
      legendItem.appendChild(legend);
    } else if (typeof legend === 'string') {
      legendItem.innerHTML = legend;
    }

    this._legends.appendChild(legendItem);
  },

  /**
   * Loops through each legend object in the legends array and displays the
   * title, image, and/or element for the legend.
   *
   * @return {DocumentFragment}
   *         A fragment containing all of the legends to be added to the
   *         expanded Legend control.
   */
  _addLegends: function () {
    var i,
        len,
        legend,
        legends;

    legends = this.options.legends || [];

    // display message if no legends exist
    if (legends.length === 0) {
      this._addMessage();
    }

    for (i = 0, len = legends.length; i < len; i++) {
      legend = legends[i];
      this._addLegend(legend);
    }
  },

  _addMessage: function () {
    var message;

    if (this._legends.querySelectorAll('li').length === 0) {
      message = document.createElement('li');
      message.className = 'no-legend';
      message.innerHTML = 'Please select a layer.';

      this._legends.appendChild(message);
    }
  },

  /**
   * Collapse the expanded Legend control
   *
   */
  _collapse: function () {
    this._container.className = this._container.className.replace(' leaflet-control-legend-expanded', '');
  },

  /**
   * Expand the collapsed Legend control
   *
   */
  _expand: function () {
    L.DomUtil.addClass(this._container, 'leaflet-control-legend-expanded');
  },

  /**
   * Setup bindings for expanding the Legend control on hover or touch
   *
   */
  _initLayout: function () {
    var className,
        closeButton,
        container,
        legends,
        link;

    className = 'leaflet-control-legend';

    closeButton = this._closeButton =
        L.DomUtil.create('button', className + '-close');
    closeButton.innerHTML = 'close';
    container = this._container =
        L.DomUtil.create('div', className);
    legends = this._legends =
        L.DomUtil.create('ul', className + '-list no-style');
    link = this._link =
        L.DomUtil.create('a', className + '-toggle material-icons');
    link.href = '#';
    link.title = 'Legend';
    link.innerHTML = '&#xE0DA;';

    // Makes this work on IE10 Touch devices by stopping it from firing
    // a mouseout event when the touch is released
    container.setAttribute('aria-haspopup', true);

    if (L.Browser.touch) {
      L.DomEvent
          .on(container, 'click', L.DomEvent.stopPropagation);
      L.DomEvent
          .on(link, 'click', L.DomEvent.stop)
          .on(link, 'click', this._expand, this);
      L.DomEvent
          .on(closeButton, 'click', this._collapse, this);
    } else {
      L.DomEvent
        .disableClickPropagation(container)
        .disableScrollPropagation(container);
      L.DomEvent
          .on(link, 'click', L.DomEvent.stop)
          .on(link, 'click', this._expand, this);
      L.DomEvent
          .on(closeButton, 'click', this._collapse, this);
    }
  },

  _onLayerAdd: function (e) {
    if (e.layer.getLegend) {
      this._addLegend(e.layer.getLegend());
    }
  },

  _onLayerRemove: function (e) {
    if (e.layer.getLegend) {
      this._removeLegend(e.layer.getLegend());
    }
  },

  _removeLegend: function (legend) {
    var i,
        len,
        listItem,
        listItems;

    // no legend to display
    if (legend === null) {
      return;
    }

    listItems = [];
    listItems = this._legends.querySelectorAll('li');

    // if legend is a DOM element
    if (typeof legend === 'object') {
      legend = legend.innerHTML;
    }

    for (i = 0, len = listItems.length; i < len; i++) {
      listItem = listItems[i];

      if (listItem.innerHTML === legend) {
        this._legends.removeChild(listItem);
        break;
      }
    }

    this._addMessage();
  },

  _removeMessage: function () {
    var message;

    message = this._legends.querySelector('.no-legend');

    if (message) {
      this._legends.removeChild(message);
    }
  },

  /**
   * onAdd Add the legend toggle and legends to the map
   *
   */
  onAdd: function (map) {
    // bind
    this._initLayout();

    // build control
    this._container.appendChild(this._link);
    this._container.appendChild(this._legends);
    this._container.appendChild(this._closeButton);

    // add legends
    this._addLegends();

    map
        .on('layeradd', this._onLayerAdd, this)
        .on('layerremove', this._onLayerRemove, this);

    return this._container;
  },

  onRemove: function (map) {
    map
      .off('layeradd', this._onLayerAdd, this)
      .off('layerremove', this._onLayerRemove, this);
  }

});


L.Control.Legend = Legend;

L.control.legend = function (options) {
  return new Legend(options);
};


module.exports = L.control.legend;


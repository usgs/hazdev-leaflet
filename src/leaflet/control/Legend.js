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
    legends: [
      {
        title: 'Sample Title',
        image: 'http://placehold.it/350x150',
        el: '<p>This can be a DOM String or DOM Object</p>'
      }
    ]
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
   * Loops through each legend object in the legends array and displays the
   * title, image, and/or element for the legend.
   *
   * @return {DocumentFragment}
   *         A fragment containing all of the legends to be added to the
   *         expanded Legend control.
   */
  _getLegends: function () {
    var fragment,
        header,
        i,
        img,
        legend,
        legends,
        wrapper;

    fragment = document.createDocumentFragment();
    legends = this.options.legends;

    for (i = 0; i < legends.length; i++) {
      legend = legends[i];

      // Add a title
      if (legend.title) {
        header = document.createElement('span');
        header.classList.add('title');
        header.innerHTML = legend.title;
        fragment.appendChild(header);
      }

      // Add an image
      if (legend.image) {
        img = document.createElement('img');
        img.src = legend.image;
        fragment.appendChild(img);
      }

      // Add a DOM Element or DOM String
      if (legend.el) {
        if (typeof legend.el === 'object') {
          fragment.appendChild(legend.el);
        } else if (typeof legend.el === 'string') {
          wrapper = document.createElement('div');
          wrapper.innerHTML = legend.el;
          fragment.appendChild(wrapper);
        }
      }
    }

    return fragment;
  },

  /**
   * onAdd Add the legend toggle and legends to the map
   *
   */
  onAdd: function () {
    // bind 
    this._initLayout();

    // build control
    this._container.appendChild(this._link);
    this._container.appendChild(this._legends);
    this._container.appendChild(this._closeButton);

    // add legends
    this._legends.appendChild(this._getLegends());

    return this._container;
  },

  /**
   * Setup bindings for expanding the Legend control on hover or touch
   *
   */
  _initLayout: function () {
    var closeButton,
        container,
        legends,
        link;

    closeButton = this._closeButton =
        L.DomUtil.create('button', 'leaflet-control-legend-close');
    closeButton.innerHTML = '<i class="material-icons">&#xE5CD;</i>';
    container = this._container =
        L.DomUtil.create('div', 'leaflet-control-legend');
    legends = this._legends =
        L.DomUtil.create('div', 'leaflet-control-legend-images');
    link = this._link =
        L.DomUtil.create('a', 'leaflet-control-legend-toggle material-icons');
    link.href = '#';
    link.title = 'Legend';
    link.innerHTML = '&#xE0DA;';

    if (L.Browser.touch) {
      L.DomEvent
          .on(container, 'click', L.DomEvent.stopPropagation);
      L.DomEvent
          .on(link, 'click', L.DomEvent.stop)
          .on(link, 'click', this._expand, this);
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

  }
});


L.Control.Legend = Legend;

L.control.legend = function (options) {
  return new Legend(options);
};


module.exports = L.control.legend;


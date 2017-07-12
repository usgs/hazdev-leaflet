/* global L */
'use strict';


/**
 * Simple extension to control in order to align generated markup with
 * HazDev template styles.
 *
 */
var HazDevLayers = L.Control.Layers.extend({
  _addItem: function (obj) {
    var checked,
        container,
        fragment,
        input,
        label;

    fragment = document.createDocumentFragment();
    label = document.createElement('label');
    checked = this._map.hasLayer(obj.layer);

    if (obj.overlay) {
      input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'leaflet-control-layers-selector';
      input.defaultChecked = checked;
    } else {
      input = this._createRadioElement('leaflet-base-layers', checked);
    }

    input.layerId = L.stamp(obj.layer);
    input.id = 'leaflet-layer-control-selector-' + input.layerId;

    L.DomEvent.on(input, 'click', this._onInputClick, this);


    label.innerHTML = obj.name;
    label.setAttribute('for', input.id);

    fragment.appendChild(input);
    fragment.appendChild(label);

    container = obj.overlay ? this._overlaysList : this._baseLayersList;
    container.appendChild(fragment);

    return fragment;
  },

  _initLayout: function () {
    var className,
        closeButton,
        container,
        form,
        link;

    className = 'leaflet-control-layers';

    closeButton = this._closeButton =
        L.DomUtil.create('button', 'leaflet-control-legend-close');
    closeButton.innerHTML = 'close';
    container = this._container =
        L.DomUtil.create('div', className);
    form = this._form =
        L.DomUtil.create('form', className + '-list');
    link = this._layersLink =
        L.DomUtil.create('a', className + '-toggle', container);
    link.href = '#';
    link.title = 'Layers';

    // Makes this work on IE10 Touch devices by stopping it from firing
    // a mouseout event when the touch is released
    container.setAttribute('aria-haspopup', true);

    L.DomEvent
        .disableClickPropagation(container)
        .disableScrollPropagation(container);
    // Work around for Firefox android issue
    // https://github.com/Leaflet/Leaflet/issues/2033
    L.DomEvent.on(form, 'click', function () {
      setTimeout(L.bind(this._onInputClick, this), 0);
    }, this);

    // expand and collapse control
    L.DomEvent.on(container, 'mousewheel', L.DomEvent.stopPropagation);
    L.DomEvent
        .on(link, 'click', L.DomEvent.stop)
        .on(link, 'click', this._expand, this);
    L.DomEvent
        .on(closeButton, 'click', this._collapse, this);

    this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
    this._separator = L.DomUtil.create('div', className + '-separator', form);
    this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

    container.appendChild(form);
    container.appendChild(closeButton);
  }

});



L.Control.HazDevLayers = HazDevLayers;

L.control.hazDevLayers = function (baseLayers, overlays, options) {
  return new HazDevLayers(baseLayers, overlays, options);
};


module.exports = L.control.hazDevLayers;

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
  }
});


L.Control.HazDevLayers = HazDevLayers;

L.control.hazDevLayers = function (baseLayers, overlays, options) {
  return new HazDevLayers(baseLayers, overlays, options);
};


module.exports = L.control.hazDevLayers;

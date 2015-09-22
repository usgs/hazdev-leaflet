'use strict';

var L = require('leaflet');

// this file defines the factory "L.esriTerrain()"
require('leaflet/layer/EsriTerrain');


var initialize = function () {
  var map;

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [L.esriTerrain()]
  });

  L.control.scale().addTo(map);
};


initialize();

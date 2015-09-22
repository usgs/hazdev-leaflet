'use strict';

var L = require('leaflet');

// this file defines the factory "L.hazardFault2014"
require('leaflet/layer/HazardFault2014');
// this file defines the factory "L.esriTerrain()"
require('leaflet/layer/EsriTerrain');


var initialize = function () {
  var map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [L.esriTerrain()]
  });

  L.hazardFault2014({
    clickable: true
  }).addTo(map);
};


initialize();

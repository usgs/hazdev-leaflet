/* global L */
'use strict';


// this file defines the factory "L.usHazard"
require('leaflet/layer/UsHazard');
// this file defines the factory "L.esriTerrain()"
require('leaflet/layer/Terrain');


var initialize = function () {
  var map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [L.esriTerrain()]
  });

  L.usHazard({
    clickable: true
  }).addTo(map);
};


initialize();

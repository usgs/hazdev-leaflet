/* global L */
'use strict';


var UsHazard = require('leaflet/layer/UsHazard'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  UsHazard({
    clickable: true
  }).addTo(map);
};


initialize();

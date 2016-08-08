/* global L */
'use strict';


var HazardFault2014 = require('leaflet/layer/HazardFault2014'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  HazardFault2014({
    clickable: true
  }).addTo(map);
};


initialize();

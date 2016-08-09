/* global L */
'use strict';


var MousePosition = require('leaflet/control/MousePosition'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map;

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  MousePosition().addTo(map);
};


initialize();

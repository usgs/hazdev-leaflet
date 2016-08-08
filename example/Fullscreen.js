/* global L */
'use strict';


var Fullscreen = require('leaflet/control/Fullscreen'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map;

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  Fullscreen().addTo(map);
};


initialize();

/* global L */
'use strict';


var UsFault = require('leaflet/layer/UsFault'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  UsFault({
    tileOpts: {
      maxZoom: 12
    }
  }).addTo(map);
};


initialize();

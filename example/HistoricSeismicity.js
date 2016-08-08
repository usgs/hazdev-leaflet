/* global L */
'use strict';


var HistoricSeismicity = require('leaflet/layer/HistoricSeismicity'),
    Terrain = require('leaflet/layer/Terrain');


var map = L.map(document.querySelector('.map'), {
  center: [40, -105],
  zoom: 3,
  layers: [Terrain()]
});

HistoricSeismicity().addTo(map);

/* global L */
'use strict';


var HistoricSeismicity = require('leaflet/layer/HistoricSeismicity'),
    EsriTerrain = require('leaflet/layer/Terrain');


var map = L.map(document.querySelector('.map'), {
  center: [40, -105],
  zoom: 3,
  layers: [EsriTerrain()]
});

HistoricSeismicity().addTo(map);

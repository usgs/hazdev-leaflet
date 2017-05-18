/* global L */
'use strict';


var Legend = require('leaflet/control/Legend'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var map;

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  Legend({
    legends: [
      {
        title: 'Sample Title',
        image: 'http://placehold.it/350x150',
        el:    '<p>This can be a DOM String or DOM Object</p>'
      }
    ]
  }).addTo(map);
};


initialize();

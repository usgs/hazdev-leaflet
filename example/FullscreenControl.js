'use strict';


var L = require('leaflet'),
    Fullscreen = require('leaflet/FullscreenControl');


var initialize,

    map;


initialize = function () {
  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [
      L.tileLayer(
        'http://{s}.arcgisonline.com/arcgis/rest/services/' +
            'NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        {
          subdomains: ['server', 'services']
        }
      )
    ]
  });

  // L.control.fullscreen().addTo(map);
  new Fullscreen().addTo(map);
};


initialize();

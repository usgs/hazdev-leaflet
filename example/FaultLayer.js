'use strict';


var ArcTileLayer = require('leaflet/ArcTileLayer'),
    L = require('leaflet');


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

  new ArcTileLayer({
    clickable: true,
    formatPopup: function (result) {
      return result.value;
    },
    url: 'http://geohazards.usgs.gov/ArcGIS/rest/services/qfaults2013'
  }).addTo(map);
};


initialize();

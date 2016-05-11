/* global L */
'use strict';


// this file defines the factory "L.esriGrayscale()"
require('leaflet/layer/EsriGrayscale');
// this file defines the factory "L.esriTerrain()"
require('leaflet/layer/EsriTerrain');
// this file defines the factory "L.openAerialMap()"
require('leaflet/layer/OpenAerialMap');
// this file defines the factory "L.openStreetMap()"
require('leaflet/layer/OpenStreetMap');
// this file defines the factory "L.CartoDBGrayscale()"
require('leaflet/layer/CartoDBGrayScale');

// Custom layers control...
require('leaflet/control/HazDevLayers');


var initialize = function () {
  var cartodb,
      grayscale,
      map,
      satellite,
      street,
      terrain;

  cartodb = L.cartodb();
  grayscale = L.esriGrayscale();
  satellite = L.openAerialMap();
  street = L.openStreetMap();
  terrain = L.esriTerrain();

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [terrain]
  });

  L.control.hazDevLayers({
    'Grayscale': grayscale,
    'Satellite': satellite,
    'Street': street,
    'Terrain': terrain,
    'CartoDB GrayScale' : cartodb
  }).addTo(map);
};


initialize();

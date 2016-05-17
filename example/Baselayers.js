/* global L */
'use strict';


// this file defines the factory "L.esriTerrain()"
require('leaflet/layer/EsriTerrain');

require('leaflet/layer/GrayscaleLayer');
// this file defines the factory "L.openAerialMap()"
require('leaflet/layer/OpenAerialMap');
// this file defines the factory "L.openStreetMap()"
require('leaflet/layer/OpenStreetMap');

// Custom layers control...
require('leaflet/control/HazDevLayers');


var initialize = function () {
  var grayscale,
      grayscaleCartodb,
      map,
      satellite,
      street,
      terrain;


  grayscale = L.GrayscaleLayer();
  grayscaleCartodb = L.GrayscaleLayer({
    'provider': L.GrayscaleLayer.CARTODB
  });
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
    'GrayscaleCartodb': grayscaleCartodb,
    'Satellite': satellite,
    'Street': street,
    'Terrain': terrain
  }).addTo(map);
};


initialize();

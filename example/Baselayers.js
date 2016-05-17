/* global L */
'use strict';


require('leaflet/layer/Grayscale');
// this file defines the factory "L.openAerialMap()"
require('leaflet/layer/OpenAerialMap');
// this file defines the factory "L.openStreetMap()"
require('leaflet/layer/OpenStreetMap');
// this file defines the factory "L.Terrain()"
require('leaflet/layer/Terrain');
// Custom layers control...
require('leaflet/control/HazDevLayers');


var initialize = function () {
  var grayscale,
      grayscaleCartodb,
      map,
      satellite,
      street,
      terrain,
      terrainWorldTopoMap;


  grayscale = L.Grayscale();
  grayscaleCartodb = L.Grayscale({
    'provider': L.Grayscale.CARTODB
  });

  satellite = L.openAerialMap();
  street = L.openStreetMap();

  terrain = L.Terrain();
  terrainWorldTopoMap = L.Terrain({
    'provider': L.Terrain.WORLD_TOPO_MAP
  });

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

    'Terrain': terrain,
    'TerrainWorldTopoMap': terrainWorldTopoMap
  }).addTo(map);
};


initialize();

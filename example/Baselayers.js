/* global L */
'use strict';

require('leaflet/layer/Dark');
require('leaflet/layer/Grayscale');
require('leaflet/control/HazDevLayers');
require('leaflet/layer/Satellite');
require('leaflet/layer/Street');
require('leaflet/layer/Terrain');


var initialize = function () {
  var dark,
      grayscale,
      grayscaleCartodb,
      map,
      satellite,
      satelliteEsri,
      street,
      streetEsri,
      terrain,
      terrainEsriTopo;

  dark = L.Dark();

  grayscale = L.Grayscale();
  grayscaleCartodb = L.Grayscale({
    'provider': L.Grayscale.CARTODB
  });

  satellite = L.Satellite();
  satelliteEsri = L.Satellite({
    'provider': L.Satellite.ESRI
  });

  street = L.Street();
  streetEsri = L.Street({
    'provider': L.Street.ESRI
  });

  terrain = L.Terrain();
  terrainEsriTopo = L.Terrain({
    'provider': L.Terrain.ESRI_TOPO
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
    'SatelliteEsri': satelliteEsri,

    'Street': street,
    'StreetEsri': streetEsri,

    'Terrain': terrain,
    'TerrainEsriTopo': terrainEsriTopo,

    'Dark': dark
  }).addTo(map);
};


initialize();

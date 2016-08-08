/* global L */
'use strict';


var Dark = require('leaflet/layer/Dark'),
    Grayscale = require('leaflet/layer/Grayscale'),
    HazDevLayers = require('leaflet/control/HazDevLayers'),
    Satellite = require('leaflet/layer/Satellite'),
    Street = require('leaflet/layer/Street'),
    Terrain = require('leaflet/layer/Terrain');


var initialize = function () {
  var dark,
      grayscale,
      grayscaleCartodb,
      map,
      satellite,
      satelliteMapquest,
      street,
      streetMapquest,
      terrain,
      terrainNatgeo;

  dark = Dark();

  grayscale = Grayscale();
  grayscaleCartodb = Grayscale({
    'provider': Grayscale.CARTODB
  });

  satellite = Satellite();
  satelliteMapquest = Satellite({
    'provider': Satellite.MAPQUEST
  });

  street = Street();
  streetMapquest = Street({
    'provider': Street.MAPQUEST
  });

  terrain = Terrain();
  terrainNatgeo = Terrain({
    'provider': Terrain.NATGEO
  });

  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
  });

  HazDevLayers({
    'Grayscale': grayscale,
    'Grayscale Cartodb': grayscaleCartodb,

    'Satellite': satellite,
    'Satellite Mapquest': satelliteMapquest,

    'Street': street,
    'Street Mapquest': streetMapquest,

    'Terrain': terrain,
    'Terrain NatGeo': terrainNatgeo,

    'Dark': dark
  }).addTo(map);

  map.addLayer(terrain);
};


initialize();
  

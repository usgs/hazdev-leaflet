/* global L */
'use strict';


var HazardFault2014 = require('leaflet/layer/HazardFault2014'),
    HazDevLayers = require('leaflet/control/HazDevLayers'),
    HistoricSeismicity = require('leaflet/layer/HistoricSeismicity'),
    Legend = require('leaflet/control/Legend'),
    TectonicPlates = require('leaflet/layer/TectonicPlates'),
    Terrain = require('leaflet/layer/Terrain'),
    UsFault = require('leaflet/layer/UsFault'),
    UsHazard = require('leaflet/layer/UsHazard');


var initialize = function () {
  var hazFaults,
      layersControl,
      map,
      overlays,
      plates,
      seismicity,
      usFaults,
      usHazards;

  overlays = {};
  map = L.map(document.querySelector('.map'), {
    center: [40, -105],
    zoom: 3,
    layers: [Terrain()]
  });

  // Add layers
  layersControl = HazDevLayers();
  map.addControl(layersControl);

  // Add tectonic plates layer
  plates = TectonicPlates({
    legend: 'tectonic plates'
  });
  layersControl.addOverlay(plates, 'Tectonic Plates');

  // Add historic seismicity layer
  seismicity = HistoricSeismicity();
  layersControl.addOverlay(seismicity, 'Historic Seismicity');
  seismicity.addTo(map);

  // Add hazard faults layer
  hazFaults = HazardFault2014({
    legend: 'hazard faults 2014'
  });
  layersControl.addOverlay(hazFaults, 'Hazard Faults 2014');

  // Add us faults layer
  usFaults = UsFault({
    legend: 'us faults'
  });
  layersControl.addOverlay(usFaults, 'US Faults');

  // Add us hazards layer
  usHazards = UsHazard({
    legend: 'us hazards'
  });
  layersControl.addOverlay(usHazards, 'US Hazards');

  // Add legend
  Legend({
    legends: [
      '<p>This is a baselayer legend</p>'
    ]
  }).addTo(map);

};


initialize();

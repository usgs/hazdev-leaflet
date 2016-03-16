/* global L */
'use strict';


// the following classes add properties to the `L` object.
// requiring them ensures they are defined before this module is exported.


// utilities
require('leaflet/ArcIdentify');
require('leaflet/UtfGrid');

// controls
require('leaflet/control/Fullscreen');
require('leaflet/control/HazDevLayers');
require('leaflet/control/MousePosition');

// layers
require('leaflet/layer/ArcTile');
require('leaflet/layer/AsynchronousGeoJson');
require('leaflet/layer/EsriGrayscale');
require('leaflet/layer/EsriTerrain');
require('leaflet/layer/HazardFault');
require('leaflet/layer/HazardFault2008');
require('leaflet/layer/HazardFault2014');
require('leaflet/layer/MouseOverLayer');
require('leaflet/layer/OpenAerialMap');
require('leaflet/layer/OpenStreetMap');
require('leaflet/layer/TectonicPlates');
require('leaflet/layer/UsFault');


module.exports = L;

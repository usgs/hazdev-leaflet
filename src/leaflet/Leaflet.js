/* global L */
'use strict';


// the following classes add properties to the `L` object.
// requiring them ensures they are defined before this module is exported.


// utilities
require('./ArcIdentify');
require('./UtfGrid');

// controls
require('./control/Fullscreen');
require('./control/MousePosition');

// layers
require('./layer/ArcTile');
require('./layer/AsynchronousGeoJson');
require('./layer/EsriGrayscale');
require('./layer/EsriTerrain');
require('./layer/HazardFault');
require('./layer/HazardFault2008');
require('./layer/HazardFault2014');
require('./layer/MouseOverLayer');
require('./layer/OpenAerialMap');
require('./layer/OpenStreetMap');


module.exports = L;

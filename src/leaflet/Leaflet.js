'use strict';


var L = require('leaflet');


// the following classes add properties to the `L` object.
// requiring them ensures they are defined before this module is exported.


// utilities
require('./ArcIdentify');

// controls
require('./control/Fullscreen');
require('./control/MousePosition');

// layers
require('./layer/ArcTile');
require('./layer/HazardFault');


module.exports = L;

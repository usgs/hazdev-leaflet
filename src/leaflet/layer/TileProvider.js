/* global L */
'use strict';


var Util = require('util/Util');


/**
 * This class provides a static builder to create TileLayers based on provider
 * info. For clarity, several "types" of maps ("Grayscale", "Terrain", etc...)
 * have their own subclass which essentially just calls the create method
 * implemented here.
 *
 */
var TileProvider = {
  /**
   * Creates a new L.TileLayer based on a map of provider info and
   * user-specified options.
   *
   * @param infoMap {Object}
   *     A map of provider info keyed by provider name.
   *
   * @param options {Object}
   *     User-specified configuration options for an L.tileLayer. Must also
   *     include a "provider" key whose value points to a known provider name
   *     in the infoMap.
   *
   * @throws {Error}
   *     If the infoMap does not contain the user-specified options.provider.
   *
   * @return {L.TileLayer}
   *     A new L.TileLayer based on the configured information.
   */
  create: function (infoMap, options) {
    var layerOptions,
        layerUrl,
        provider;

    provider = infoMap[options.provider];
    layerUrl = provider.url;
    layerOptions = Util.extend({}, provider.options, options);

    if (layerOptions.hasOwnProperty('provider')) {
      delete layerOptions.provider;
    }

    return L.tileLayer(layerUrl, layerOptions);
  }
};


module.exports = TileProvider;

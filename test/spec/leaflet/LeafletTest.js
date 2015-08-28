/* global chai, describe, it */
'use strict';

var expect = chai.expect,
    Leaflet = require('leaflet/Leaflet');


describe('Leaflet', function () {

  describe('constructor', function () {

    it('is defined', function () {
      expect(Leaflet).to.not.equal(null);
    });

  });

});

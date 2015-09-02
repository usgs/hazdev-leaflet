/* global chai, describe, it */
'use strict';

var expect = chai.expect,
    L = require('leaflet');


describe('Leaflet', function () {

  describe('constructor', function () {

    it('is defined', function () {
      expect(L).to.not.equal(null);
    });

  });

});

/* global chai, describe, it, L */
'use strict';


var expect = chai.expect;


describe('Leaflet', function () {

  describe('constructor', function () {

    it('is defined', function () {
      expect(L).to.not.equal(null);
    });

  });

});

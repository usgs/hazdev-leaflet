/* global L */
'use strict';

require('leaflet/control/ZoomToControl');

var initialize = function () {
  var locations,
      map,
      natgeo,
      zoomTo;

  locations = [
      {
        title:'Alaska',
        id: 'alaska',
        bounds: [[72,-175], [50,-129]]
      },
      {
        title:'California',
        id: 'california',
        bounds: [[42,-125], [32,-113]]
      },
      {
        title:'Central U.S.',
        id: 'central_us',
        bounds:[[32,-104],[40,-88]]
      },
      {
        title:'Hawaii',
        id: 'hawaii',
        bounds: [[22,-160], [18,-154]]
      },
      {
        title:'Puerto Rico',
        id: 'puerto_rico',
        bounds: [[20,-70], [16,-62]]
      },
      {
        title:'U.S.',
        id: 'us',
        bounds:[[50,-125], [24.6,-65]]
      },
      {
        title:'World',
        id: 'world',
        bounds:[[70,20],[-70,380]]
      }
    ];


  map = L.map(document.querySelector('.map'), {
      center: L.latLng(40.0, -105.0),
      zoom: 3
    });

  zoomTo = L.control.zoomToControl({locations:locations});
  natgeo = L.tileLayer('http://server.arcgisonline.com' +
      '/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}');

  map.addLayer(natgeo);
  map.addControl(zoomTo);
};


initialize();

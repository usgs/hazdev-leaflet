'use strict';

var autoprefixer = require('autoprefixer-core'),
    cssnano = require('cssnano'),
    precss = require('precss');

var config = require('./config');
var CWD = process.cwd();

var postcss = {
  dev: {
    options: {
      map: true,
      processors: [
        precss({
          path: [
            CWD + '/' + config.src,
            CWD + '/node_modules/leaflet/dist'
          ]
        }),
        autoprefixer({'browsers': 'last 2 versions'}), // vendor prefix as needed
      ]
    },
    src: config.src + '/hazdev-leaflet.scss',
    dest: config.build + '/' + config.src + '/hazdev-leaflet.css'
  },

  dist: {
    options: {
      processors: [
        cssnano({zindex: false}) // minify
      ]
    },
    src: config.build + '/' + config.src + '/hazdev-leaflet.css',
    dest: config.dist + '/hazdev-leaflet.css'
  }
};

module.exports = postcss;

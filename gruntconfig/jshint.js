'use strict';

var config = require('./config');

var jshint = {
  options: {
    jshintrc: '.jshintrc'
  },

  gruntfile: [
    'Gruntfile.js',
    'gruntconfig/**/*.js'
  ],

  scripts: [
    config.example + '/**/*.js',
    config.src + '/**/*.js',
    config.test + '/**/*.js'
  ]
};

module.exports = jshint;

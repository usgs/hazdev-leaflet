'use strict';

var config = require('./config');

var watch = {
  scripts: {
    files: [
      config.example + '/**/*.js',
      config.src + '/**/*.js',
      config.test + '/**/*.js'
    ],
    tasks: [
      'jshint:scripts',
      'browserify',
      'mocha_phantomjs'
    ]
  },
  html: {
    files: [
      config.example + '/**/*.html',
      config.test + '/**/*.html'
    ],
    tasks: ['copy:test']
  },
  reload: {
    files: [
      config.build + '/**/*',
      config.example + '/**/*'
    ],
    options: {
      livereload: config.liveReloadPort
    }
  },

  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js'
    ],
    tasks: [
      'jshint:gruntfile'
    ]
  },

  scss: {
    files: [
      config.src + '/**/*.scss'
    ],
    tasks: [
      'postcss:dev'
    ]
  }
};

module.exports = watch;

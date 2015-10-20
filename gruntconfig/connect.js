'use strict';

var config = require('./config');

var connect = {
  options: {
    hostname: '*'
  },
  dev: {
    options: {
      base: [
        config.build + '/' + config.src,
        config.example
      ],
      livereload: true,
      open: 'http://localhost:8020/example.html',
      port: 8020
    }
  },

  test: {
    options: {
      base: [
        config.build + '/' + config.src,
        config.build + '/' + config.test,
        'node_modules'
      ],
      open: 'http://localhost:8021/test.html',
      port: 8021
    }
  },

  dist: {
    options: {
      base: [
        config.dist,
        config.example
      ],
      keepalive: true,
      open: 'http://localhost:8022/example.html',
      port: 8022
    }
  }
};

module.exports = connect;

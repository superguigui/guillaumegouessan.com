'use strict';

var options = require('minimist')(process.argv.slice(2));
var defaults = require('defaults');

options = defaults(options, {
  debug: true,
  watch: false,
  minify: false,
  env: 'development'
});

if (options.production) {
  options.debug = false;
  options.minify = true;
  options.env = 'production';
}

module.exports = options;
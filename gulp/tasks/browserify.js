'use strict';

var gulp = require('gulp');
var vinyl = require('vinyl-source-stream');
var envify = require('envify/custom');
var stringify = require('stringify');
var stripify = require('stripify');
var watchify = require('watchify');
var babelify = require('babelify');
var opts = require('../options');
var cfg = require('../config');
var aliasify = require('aliasify').configure(cfg.aliasify);
var bundleLogger = require('../utils/time-logger')('bundle');
var errorNotif = require('../utils/error-notification');

gulp.task('browserify', function() {
  var bundler = require('browserify')({
    entries: cfg.entry.scripts,
    cache: {},
    packageCache: {},
    fullPaths: opts.debug,
    debug: opts.debug
  });

  if (opts.watch) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  applyTransform(bundler);

  return bundle();

  function bundle() {
    bundleLogger.start();

    return bundler.bundle()
      .on('error', errorNotif)
      .pipe(vinyl(cfg.output.filename + '.js'))
      .pipe(gulp.dest(cfg.output.path))
      .on('end', bundleLogger.end);
  }
});

function applyTransform(bundler) {
  bundler.transform(babelify);
  bundler.transform(envify({
    NODE_ENV: opts.env
  }));
  bundler.transform(aliasify);
  bundler.transform(stringify);
  if (opts.production) {
    bundler.transform(stripify);
  }
}
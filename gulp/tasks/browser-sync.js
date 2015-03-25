'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var opts = require('../options');
var cfg = require('../config');

// Somehow if we set proxy with a value and server to undefined,
// it doesn't want to start the proxy server. So we need to mix BrowserSync's
// options depending on the context (proxy or server).
var bsOpts = require('defaults')({
  notify: false,
  minify: false,
  browser: ['google chrome']
}, opts.proxy ? {
    proxy: opts.proxy
  } : {
    server: {
      baseDir: cfg.output.root,
      index: 'index.html',
      // SPA app, redirect requests to index.html
      middleware: [historyApiFallback]
    }
  }
);

gulp.task('server', ['build'], function() {
  browserSync(bsOpts);

  if (opts.watch) {
    // CSS are directly streamed from stylus' task.
    gulp.watch(['./static/**/*.*', '!./static/**/*.css'], browserSync.reload);
  }
});
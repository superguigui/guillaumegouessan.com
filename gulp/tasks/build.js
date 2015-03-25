'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var join = require('path').join;
var opts = require('../options');
var output = require('../config').output;
var outputFile = join(output.path, output.filename);

gulp.task('build', ['clean', 'browserify', 'stylus'], function() {
  // JavaScript's watch is handled by browserify.
  // (See gulp/tasks/browserify.js).
  if (opts.watch) {
    gulp.watch('./app/**/*.styl', ['stylus']);
  }

  if (opts.minify) {
    gulp.src(outputFile + '.js')
      .pipe(uglify({
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true
      }))
      .pipe(gulp.dest(output.path));

    gulp.src(outputFile + '.css')
      .pipe(minifyCss())
      .pipe(gulp.dest(output.path));
  }
});
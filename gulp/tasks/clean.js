'use strict';
var gulp = require('gulp');
var rm = require('rimraf');
var output = require('../config').output.path;

gulp.task('clean', function(cb) {
  rm.sync(output);
  cb();
});
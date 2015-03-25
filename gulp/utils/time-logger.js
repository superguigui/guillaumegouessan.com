'use strict';

var prettyHrtime = require('pretty-hrtime');
var util = require('gulp-util');
var green = util.colors.cyan;
var magenta = util.colors.magenta;

module.exports = function(processName) {
  var startTime;

  return {
    start: function() {
      startTime = process.hrtime();
      util.log('Running', '\'' + green(processName) + '\'...');
    },

    end: function() {
      var taskTime = process.hrtime(startTime);

      util.log(
        'Finished',
        '\'' + green(processName) + '\'',
        'after', magenta(prettyHrtime(taskTime))
      );
    }
  };
};
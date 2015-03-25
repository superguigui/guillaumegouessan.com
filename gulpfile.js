'use strict';

var path = require('path');
var fs = require('fs');

fs.readdirSync('./gulp/tasks/')
  .forEach(function(task) {
    if (path.extname(task) !== '.js') return;
    require('./gulp/tasks/' + task);
  });
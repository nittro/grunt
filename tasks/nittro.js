/*
 * grunt-nittro
 * https://github.com/nittro/grunt
 *
 * Copyright (c) 2016 Dan Kadera
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('nittro', 'Nittro builder Grunt task', function() {
      var Builder = require('nittro');

      var builder = new Builder(this.options({
          baseDir: process.cwd(),
          vendor: {},
          base: {},
          extras: {},
          libraries: {},
          bootstrap: true,
          stack: true
      }));

      this.files.forEach(function (f) {
          var source;

          if (f.dest.match(/\.js$/)) {
              source = builder.buildJs();
          } else {
              source = builder.buildCss();
          }

          grunt.file.write(f.dest, source);
          grunt.log.ok('Built nittro package ' + f.dest);

      });
  });

};

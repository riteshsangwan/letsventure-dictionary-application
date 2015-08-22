'use strict';


/**
 * Application Gruntfile
 * This will configure the grunt tasks to be performed
 *
 * The default grunt task is to run jshint
 *
 * @author      ritesh
 * @version     1.0
 */

var paths = {
  js: ['*.js', '!node_modules/**', '!public/bower_components/**' ]
};

module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        src: paths.js,
        options: {
          jshintrc: true
        }
      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint']);
};
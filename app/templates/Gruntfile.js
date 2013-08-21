'use strict';

var fs = require('fs'),
  _ = require('underscore');

var jadeHelpers = require('./grunt-helpers/jade-helpers')(),
  unitTestHelpers = require('./grunt-helpers/unit-testing');

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {

      all: [
        'Gruntfile.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    jade: {
      modules: {
        options: {
          pretty: true,
          data: jadeHelpers
        },
        files: [{
          expand: true,
          cwd: 'app/modules',
          src: ['**/demo/**/*-demo.jade'],
          dest: 'build/demos/',
          ext: '.html',
          flatten: true
        }]
      },
      tests: {
        options: {
          pretty: true,
          data: unitTestHelpers.jadeHelpers()
        },
        files: [{
          expand: true,
          cwd: 'app/tests',
          src: ['**/index.jade'],
          dest: 'build/tests/',
          ext: '.html',
          flatten: false
        }]
      }
    },

    copy: {
      commonJS: {
        files: [{
          expand: true,
          cwd: 'app/common/js/',
          src: ['**/*.js'],
          dest: 'build/js'
        }]
      },
      moduleJS: {
        files: (function () {

          var moduleDir = fs.readdirSync('app/modules'),
            modules = [];

          _.each(moduleDir, function (module) {
            var stat = fs.statSync('app/modules/' + module);

            if (stat.isDirectory()) {
              modules.push({
                expand: true,
                cwd: 'app/modules/' + module + '/js/',
                src: ['**/*.js'],
                dest: 'build/js/modules/' + module
              });
            }
          });
          return modules;
        })()

      },
      unitTests: {
        files: [{
          expand: true,
          cwd: 'app/tests/',
          src: ['**', '!**/*.jade'],
          dest: 'build/tests/'
        }]
      },
      bower: {
        files: [{
          expand: true,
          cwd: 'bower_components/',
          src: ['**'],
          dest: 'build/bower_components/'
        }]
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      build: ['build']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-doccoh');

  grunt.registerTask('test', ['default']);
  grunt.registerTask('default', ['clean', 'jshint', 'copy', 'jade']);
};
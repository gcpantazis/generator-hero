'use strict';

module.exports = function (grunt) {

  var jadeconfig = {
    data: require('./grunt-helpers/jade-helpers')()
  };

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
        options: jadeconfig,
        files: [
          {
            expand: true,
            cwd: 'app/modules',
            src: ['**/demo/**/*-demo.jade'],
            dest: 'build/demos/',
            ext: '.html',
            flatten: true
          }
        ]
      }
    },

    copy: {
      commonDebug: {
        files: [
          {expand: true, cwd: 'src/common/rootfiles/', src: ['**', '!README.*'], dest: 'build'}
        ]
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

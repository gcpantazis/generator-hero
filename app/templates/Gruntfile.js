'use strict';

module.exports = function (grunt) {

  var jadeconfig = {

    pretty: true,

    data: {

      render: function (templatePath, dataObj) {
        return require('grunt-contrib-jade/node_modules/jade').compile(grunt.file.read(templatePath), {
          filename: templatePath,
          pretty: true
        })(dataObj);
      },

      getData: function (path) {
        return grunt.file.readJSON(path);
      },

      locals: {

        data: function (path) {
          return jadeconfig.data.getData(path);
        },

        partial: function (templatePath, dataObj) {
          return jadeconfig.data.render(templatePath, dataObj);
        }
      }
    }
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
      common: {
        options: jadeconfig,
        files: [
          {
            expand: true,
            cwd: 'src/pages',
            src: ['**/*.jade'],
            dest: 'build/',
            ext: '.html'
          }
        ]
      },
      modules: {
        options: jadeconfig,
        files: [
          {
            expand: true,
            cwd: 'src/modules',
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

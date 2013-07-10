'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var HeroGenerator = module.exports = function HeroGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HeroGenerator, yeoman.generators.Base);

HeroGenerator.prototype.askFor = function askFor() {

};

HeroGenerator.prototype.app = function app() {

  this.mkdir('app');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

HeroGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

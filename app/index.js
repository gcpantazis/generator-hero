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

  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');

  this.mkdir('grunt-helpers');
  this.directory('grunt-helpers', './grunt-helpers');
};

HeroGenerator.prototype.commonfiles = function commonfiles() {

  this.mkdir('app/common');

  this.copy('common/html/head.jade', 'app/common/html/head.jade')
  this.copy('common/html/foot.jade', 'app/common/html/foot.jade')
  this.copy('common/html/ie-conditionals.html', 'app/common/html/ie-conditionals.html')
  this.copy('common/html/jade-helpers.jade', 'app/common/html/jade-helpers.jade')
  this.copy('common/html/meta.html', 'app/common/html/meta.html')

  this.copy('common/js/_index.js', 'app/common/js/secondary/index.js')
  this.copy('common/js/_components-spec-index.js', 'app/common/js/secondary/specs/index.js')
};

HeroGenerator.prototype.testingFrameworks = function testingFrameworks() {

  this.mkdir('app/tests');

  this.directory('mocha', 'app/tests/mocha');
  this.directory('qunit', 'app/tests/qunit');
};

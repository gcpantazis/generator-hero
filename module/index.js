'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var _  = require('underscore');

_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ModuleGenerator, yeoman.generators.Base);

ModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      name: 'moduleName',
      message: 'Would you like to call this module?'
    },
    {
      name: 'authorName',
      message: 'Who\'s the author?'
    },
    {
      name: 'moduleSummary',
      message: 'Briefly summarize what this module is.'
    }
  ];

  this.prompt(prompts, function (props) {

    this.authorName = props.authorName;
    this.moduleSummary = props.moduleSummary;
    this.moduleName = props.moduleName;
    this.moduleName = this.moduleName.substring(0, 1).toLowerCase() + this.moduleName.substring(1);
    this.className = this.moduleName.substring(0, 1).toLowerCase() + this.moduleName.substring(1);

    cb();
  }.bind(this));
};

ModuleGenerator.prototype.app = function app() {

  // Folder Structure

  this.mkdir('app/modules/' + _.dasherize(this.moduleName) + '/html');
  this.mkdir('app/modules/' + _.dasherize(this.moduleName) + '/js');
  this.mkdir('app/modules/' + _.dasherize(this.moduleName) + '/css');
  this.mkdir('app/modules/' + _.dasherize(this.moduleName) + '/img');
  this.mkdir('app/modules/' + _.dasherize(this.moduleName) + '/demo');

  // README

  this.template('_README.md', 'app/modules/' + _.dasherize(this.moduleName) + '/README.md');

  // Javascript

  this.template('_index.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/index.js');
  this.template('_module.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/' + _.dasherize(this.moduleName) + '.js');

  // SCSS

  this.template('_styles.scss', 'app/modules/' + _.dasherize(this.moduleName) + '/css/' + _.dasherize(this.moduleName) + '.scss');
  this.template('_responsive-styles.scss', 'app/modules/' + _.dasherize(this.moduleName) + '/css/_responsive-' + _.dasherize(this.moduleName) + '.scss');

  // Jade

  this.template('_module-layout.jade', 'app/modules/' + _.dasherize(this.moduleName) + '/html/' + _.dasherize(this.moduleName) + '.jade');
  this.template('_module-demo.jade', 'app/modules/' + _.dasherize(this.moduleName) + '/demo/' + _.dasherize(this.moduleName) + '-demo.jade');
  this.template('_module-data.json', 'app/modules/' + _.dasherize(this.moduleName) + '/demo/data/' + _.dasherize(this.moduleName) + '.json');
};
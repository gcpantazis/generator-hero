'use strict';

var util = require('util');
var path = require('path');
var Rewriter = require('../utilities/rewrite');
var yeoman = require('yeoman-generator');
var _ = require('underscore');

_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ModuleGenerator, yeoman.generators.Base);

ModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var firstPrompt = [{
    type: 'list',
    name: 'newOrExisting',
    message: 'New or existing module?',
    choices: [{
      name: 'New Module!',
      value: 'new'
    }, {
      name: 'Add method to existing module.',
      value: 'existing'
    }]
  }, ];

  var prompts = [{
    name: 'moduleName',
    message: 'Would you like to call this module?'
  }, {
    name: 'authorName',
    message: 'Who\'s the author?'
  }, {
    name: 'moduleSummary',
    message: 'Briefly summarize what this module is.'
  }];

  this.prompt(firstPrompt, function(props) {

    this.newOrExisting = props.newOrExisting;

    if (this.newOrExisting === 'new') {

      this.prompt(prompts, function(props) {

        this.authorName = props.authorName;
        this.moduleSummary = props.moduleSummary;
        this.moduleName = props.moduleName;
        this.moduleName = this.moduleName.substring(0, 1).toLowerCase() + this.moduleName.substring(1);
        this.className = this.moduleName.substring(0, 1).toLowerCase() + this.moduleName.substring(1);

        cb();
      }.bind(this));
    } else {

      this.prompt([{
        name: 'whichModule',
        message: 'Which module?'
      }, {
        name: 'methodName',
        message: 'Name of new method?'
      },{
        name: 'methodDescription',
        message: 'Describe the method?'
      }], function(props) {
        this.whichModule = props.whichModule;
        this.methodName = props.methodName;
        this.methodDescription = props.methodDescription;
        cb();
      }.bind(this));

    }
  }.bind(this));
};

ModuleGenerator.prototype.app = function app() {

  if (this.newOrExisting === 'new') {

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

    this.template('spec/_index-mocha.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/specs/mocha/index.js');
    this.template('spec/_main-mocha.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/specs/mocha/main.js');

    this.template('spec/_index-qunit.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/specs/qunit/index.js');
    this.template('spec/_main-qunit.js', 'app/modules/' + _.dasherize(this.moduleName) + '/js/specs/qunit/main.js');

    // SCSS

    this.template('_styles.scss', 'app/modules/' + _.dasherize(this.moduleName) + '/css/' + _.dasherize(this.moduleName) + '.scss');
    this.template('_responsive-styles.scss', 'app/modules/' + _.dasherize(this.moduleName) + '/css/_responsive-' + _.dasherize(this.moduleName) + '.scss');

    // Jade

    this.template('_module-layout.jade', 'app/modules/' + _.dasherize(this.moduleName) + '/html/' + _.dasherize(this.moduleName) + '.jade');
    this.template('_module-demo.jade', 'app/modules/' + _.dasherize(this.moduleName) + '/demo/' + _.dasherize(this.moduleName) + '-demo.jade');
    this.template('_module-data.json', 'app/modules/' + _.dasherize(this.moduleName) + '/demo/data/' + _.dasherize(this.moduleName) + '.json');

  } else if (this.newOrExisting === 'existing') {
    addMethodToModule(this.whichModule, this.methodName, this.methodDescription);
  }
};

var addMethodToModule = function(moduleName, methodName, description) {

  try {

    moduleName = moduleName.substring(0, 1).toLowerCase() + moduleName.substring(1);

    var fullPath = path.join('app', 'modules/' + _.dasherize(moduleName) + '/js/' + _.dasherize(moduleName) + '.js');

    Rewriter.rewriteFile({
      file: fullPath,
      needle: '// END: METHODS',
      splicable: [
        '// ' + description,
        methodName + ': function() {',
        '  ',
        '  var self = this;',
        '  ',
        '  return self;',
        '},',
        '  '
      ]
    });

  } catch (e) {
    console.log(e);
    console.log('\nUnable to find '.yellow + methodName);
  }





  try {

    moduleName = moduleName.substring(0, 1).toLowerCase() + moduleName.substring(1);

    var fullPath = path.join('app', 'modules/' + _.dasherize(moduleName) + '/js/specs/mocha/main.js');

    Rewriter.rewriteFile({
      file: fullPath,
      needle: '// END: TESTS',
      splicable: [
        'describe("The '+methodName+' method", function() {',
        '  it("'+description+'", function() {',
        '    Instance = new '+_.classify(moduleName)+'($tester);',
        '    Instance.'+methodName+'()',
        '    ',
        '    expect(Instance.constructor).to.equal('+_.classify(moduleName)+');',
        '  });',
        '});',
        '  '
      ]
    });

  } catch (e) {
    console.log(e);
    console.log('\nUnable to find '.yellow + methodName);
  }











  try {

    moduleName = moduleName.substring(0, 1).toLowerCase() + moduleName.substring(1);

    var fullPath = path.join('app', 'modules/' + _.dasherize(moduleName) + '/js/specs/qunit/main.js');

    Rewriter.rewriteFile({
      file: fullPath,
      needle: '// END: TESTS',
      splicable: [
        'test("'+description+'", function() {',
        '  Instance = new '+_.classify(moduleName)+'($tester);',
        '  Instance.'+methodName+'()',
        '  ',
        '  equal( Instance.constructor, '+_.classify(moduleName)+' );',
        '});',
        '  '
      ]
    });

  } catch (e) {
    console.log(e);
    console.log('\nUnable to find '.yellow + methodName);
  }

};
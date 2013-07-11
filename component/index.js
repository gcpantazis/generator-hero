'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var Rewriter = require('../utilities/rewrite');
var _  = require('underscore');

_.str = require('underscore.string');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ComponentGenerator, yeoman.generators.Base);

ComponentGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      name: 'componentName',
      message: 'Would you like to call this component?'
    },
    {
      name: 'authorName',
      message: 'Who\'s the author?'
    },
    {
      name: 'componentSummary',
      message: 'Briefly summarize what this component is.'
    }
  ];

  this.prompt(prompts, function (props) {

    this.authorName = props.authorName;
    this.componentSummary = props.componentSummary;
    this.componentName = props.componentName;
    this.componentName = this.componentName.substring(0, 1).toLowerCase() + this.componentName.substring(1);

    cb();
  }.bind(this));
};

ComponentGenerator.prototype.app = function app() {

  this.template('_module.js', 'app/common/js/secondary/' + _.dasherize(this.componentName) + '.js');
  addScriptToIndex(this.componentName);
};

var addScriptToIndex = function (componentName) {
  try {

    var fullPath = path.join('app', 'common/js/secondary/index.js');

    Rewriter.rewriteFile({
      file: fullPath,
      needle: '// END: YEOMAN',
      splicable: [
        'components.'+componentName+' = require(\'secondary/'+_.dasherize(componentName)+'\');'
      ]
    });
  } catch (e) {
    console.log(e);
    console.log('\nUnable to find '.yellow + 'app/common/js/secondary/index.js');
  }
};

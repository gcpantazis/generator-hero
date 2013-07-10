'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FooGenGenerator = module.exports = function FooGenGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the FooGen subgenerator with the argument ' + this.name + '.');
};

util.inherits(FooGenGenerator, yeoman.generators.NamedBase);

FooGenGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};

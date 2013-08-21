
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Main Mocha Spec
// --------------------------------------------

define(function(require){

  'use strict';

  var <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  var instance = new <%= _.classify(moduleName) %>($('.<%= _.dasherize(moduleName) %>'));

  // START : TESTS
  // END : TESTS

});


// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Main Spec
// --------------------------------------------

define(function(require){

  'use strict';

  var Jasmine = require('jasmine'),
      JasmineHTML = require('jasmine-html'),
      <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  var instance = new <%= _.classify(moduleName) %>($('.<%= _.dasherize(moduleName) %>'));

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });

});

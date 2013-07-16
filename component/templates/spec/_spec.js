
// <%= _.titleize(_.humanize(componentName)) %> (<%= _.classify(componentName) %>) Spec
// --------------------------------------------
//
// * **Version:** 0.1
// * **Author:** <%= authorName %>

define(function(require){

  'use strict';

  var Jasmine = require('jasmine'),
      JasmineHTML = require('jasmine-html'),
      <%= _.classify(componentName) %> = require('secondary/<%= _.dasherize(componentName) %>');

  var instance = new <%= _.classify(componentName) %>($('.<%= _.dasherize(componentName) %>'));

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });

});

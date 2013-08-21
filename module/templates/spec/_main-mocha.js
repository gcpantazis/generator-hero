
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Main Mocha Spec
// --------------------------------------------

define(function(require){

  'use strict';

  var <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  var $fixture = $('.<%= _.dasherize(moduleName) %>');

  describe("The <%= _.classify(moduleName) %> module", function() {

    var Instance,
        $tester;

    beforeEach(function() {
      $tester = $fixture.clone().appendTo('body');
    });

    afterEach(function() {
      $tester.remove();
      Instance = null;
    });

    // START: TESTS

    it("Initializes the module.", function() {
      Instance = new <%= _.classify(moduleName) %>($tester);

      expect(Instance.constructor).to.equal(<%= _.classify(moduleName) %>);
    });

    // END: TESTS

  });

});

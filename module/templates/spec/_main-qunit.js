
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Main qUnit Spec
// --------------------------------------------

define(function(require){

  'use strict';

  var <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  var $fixture = $('.<%= _.dasherize(moduleName) %>'),
      Instance, $tester;

  module("<%= _.titleize(_.humanize(moduleName)) %>", {

    setup: function() {
      $tester = $fixture.clone().appendTo('body');
    },

    teardown: function() {
      $tester.remove();
      Instance = null;
    }
  });

  // START: TESTS

  test("Initializes the module.", function() {
    Instance = new <%= _.classify(moduleName) %>($tester);

    equal( Instance.constructor, <%= _.classify(moduleName) %> );
  });

  // END: TESTS

});

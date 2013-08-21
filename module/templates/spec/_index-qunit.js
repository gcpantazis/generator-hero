
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Spec Index
// --------------------------------------------

define(function(require){

  var specs = {
    'main': require('modules/<%= _.dasherize(moduleName) %>/specs/qunit/main')
  };

});
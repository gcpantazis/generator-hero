
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) qUnit Spec Index
// --------------------------------------------

define(function(require){

  var specs = {
    'main': require('modules/<%= _.dasherize(moduleName) %>/specs/qunit/main')
  };

});
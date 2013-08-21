
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Mocha Spec Index
// --------------------------------------------

define(function(require){

  var specs = {
    'main': require('modules/<%= _.dasherize(moduleName) %>/specs/mocha/main')
  };

});
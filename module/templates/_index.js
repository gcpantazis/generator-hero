
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Module Index
// -----------------------------------------

define(function(require){

  var <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  var $elements = $('.<%= _.dasherize(moduleName) %>');

  new <%= _.classify(moduleName) %>($elements);

});
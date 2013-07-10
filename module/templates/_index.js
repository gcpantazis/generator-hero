
define(function(require){

  var <%= _.classify(moduleName) %> = require('modules/<%= _.dasherize(moduleName) %>/<%= _.dasherize(moduleName) %>');

  <%= _.classify(moduleName) %>.init();

  return {
    <%= _.classify(moduleName) %>: <%= _.classify(moduleName) %>
  };
});
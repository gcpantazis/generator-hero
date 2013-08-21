var fs = require('fs'),
  _ = require('underscore');

var jadeHelpersMain = require('./jade-helpers')();

module.exports = function(){

  var getFixtures = function() {
    return '';
  };

  var getTestableModules = function (framework) {

    var moduleDir = fs.readdirSync('app/modules'),
      modules = [];

    _.each(moduleDir, function(module){
      var stat = fs.statSync('app/modules/' + module);

      if (stat.isDirectory()) {
        modules.push('modules/' + module + '/specs/' + framework + '/index');
      }
    })

    return modules;
  };

  var self = {

    jadeHelpers: function(){

      jadeHelpersMain.getFixtures = getFixtures;
      jadeHelpersMain.getTestableModules = getTestableModules;

      return jadeHelpersMain;
    }

  }

  return self;

}();
var fs = require('fs'),
  _ = require('underscore');

var jadeHelpersMain = require('./jade-helpers')();

module.exports = function(){

  var getFixtures = function() {

  };

  var getTestableModules = function () {

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

// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Module
// --------------------------------------------
//
// * **Version:** 0.1
// * **Author:** <%= authorName %>
//
// Description

define(function(require){

  'use strict';

  var $ = require('jquery');

  var module = {
    'init': function() {
      $('.<%= _.dasherize(moduleName) %>').each(function(){
        new <%= _.classify(moduleName) %>(this);
      });
    }
  };

  var <%= _.classify(moduleName) %> = function(element){

    var self = this;

    self.$el = $(element);

    self.init();

    log('SONY : <%= _.classify(moduleName) %> : Initialized');
  };

  <%= _.classify(moduleName) %>.prototype = {

    constructor: <%= _.classify(moduleName) %>,

    init: function() {

      var self = this;

      // Get Going!

    }
  };

  return module;

});

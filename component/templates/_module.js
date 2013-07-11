
// <%= _.titleize(_.humanize(componentName)) %> (<%= _.classify(componentName) %>) Component
// --------------------------------------------
//
// * **Version:** 0.1
// * **Author:** <%= authorName %>
//
// <%= componentSummary %>

define(function(require){

  'use strict';

  var $ = require('jquery');

  var module = {
    'init': function() {
      $('.<%= _.dasherize(componentName) %>').each(function(){
        new <%= _.classify(componentName) %>(this);
      });
    }
  };

  var <%= _.classify(componentName) %> = function(element){

    var self = this;

    self.$el = $(element);

    self.init();

    log('<%= _.classify(componentName) %> : Initialized');
  };

  <%= _.classify(componentName) %>.prototype = {

    constructor: <%= _.classify(componentName) %>,

    init: function() {

      var self = this;

      // Get Going!

    }
  };

  return component;

});

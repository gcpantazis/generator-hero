
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

  var <%= _.classify(componentName) %> = function(element){

    var self = this;

    self.$el = $(element);
    self.init();

    log('<%= _.classify(componentName) %> : Initialized');

    return self;
  };

  <%= _.classify(componentName) %>.prototype = {

    constructor: <%= _.classify(componentName) %>,

    init: function() {

      var self = this;

      // Get Going!

      return self;
    }
  };

  return <%= _.classify(componentName) %>;

});

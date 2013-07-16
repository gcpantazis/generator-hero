
// <%= _.titleize(_.humanize(moduleName)) %> (<%= _.classify(moduleName) %>) Module
// --------------------------------------------
//
// * **Version:** 0.1
// * **Author:** <%= authorName %>
//
// <%= moduleSummary %>

define(function(require){

  'use strict';

  var $ = require('jquery');

  var <%= _.classify(moduleName) %> = function(element){

    var self = this,
        instances = [];

    self.$el = $(element);

    if ( self.$el.length === 0 ) {
      return null;
    } else if ( self.$el.length > 1 ) {
      self.$el.each(function(){
        instances.push(new <%= _.classify(moduleName) %>(this));
      });
      return instances;
    }

    self.init();

    log('<%= _.classify(moduleName) %> : Initialized');

    return self;
  };

  <%= _.classify(moduleName) %>.prototype = {

    constructor: <%= _.classify(moduleName) %>,

    init: function() {

      var self = this;

      // Get Going!

      return self;
    }
  };

  return <%= _.classify(moduleName) %>;

});

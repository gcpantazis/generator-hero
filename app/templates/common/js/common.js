
requirejs.config({

  baseUrl: '/common/js',

  paths: {

    // libraries
    jquery: '/bower_components/jquery/jquery'
  },

  shim: {
  },

  // IE8 and 7 sometimes time out when set to 30sec
  waitSeconds: 45
});

define(function(require){

  var jquery = require('jquery');

});

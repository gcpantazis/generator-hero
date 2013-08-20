
var fs = require('fs'),
  jade = require('grunt-contrib-jade/node_modules/jade'),
  _ = require('underscore');

module.exports = function() {

  var self = {

    // An object for storing render data between modules. Probably best to use
    // in conjunction with `getData` at the start of a layout.

    state: {},

    // Grabs a model of a provided `module` with a given `id`.

    getData: function(path) {

      var data = {},
        file;

      try {
        file = fs.readFileSync(path).toString();
        data = JSON.parse(file);
      } catch (e) {
        console.log(e);
      }

      return data;
    },

    // Renders the provided `module` with the model matching the provided `id`.

    renderSingle: function(module, data) {

      var output = '',
        locals = {};

      if (typeof data === 'string') {
        data = self.getData(data);
      }

      _.extend(locals, self, data);

      try {
        output = jade.renderFile(module, locals);
      } catch (e) {
        console.log(e);
      }

      return output;
    },

    // Given an array of modules, renders all of them sequentially using `renderSingle`.

    renderAll: function(modules) {

      var output = '';

      for (var i in modules) {
        output += self.renderSingle(modules[i].module, modules[i].data);
      }

      return output;
    }
  };

  return self;
}
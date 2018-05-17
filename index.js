var Filter = require("broccoli-filter");
var nodeSass = require("node-sass");

SassModular.prototype = Object.create(Filter.prototype);
SassModular.prototype.constructor = SassModular;
function SassModular(inputNode, options) {
  options = options || {};
  Filter.call(this, inputNode, {
    annotation: options.annotation
  });
}

SassModular.prototype.extensions = ["sass", "scss"];
SassModular.prototype.targetExtension = "css";

SassModular.prototype.processString = function(content, relativePath) {
  return new Promise(function(resolve, reject) {
    nodeSass.render(
      {
        data: content
      },
      function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result.css);
        }
      }
    );
  });
};

module.exports = SassModular;

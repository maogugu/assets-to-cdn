'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetsToCDN = function () {
  function AssetsToCDN(cdn) {
    _classCallCheck(this, AssetsToCDN);

    this.cdn = cdn;
  }

  _createClass(AssetsToCDN, [{
    key: 'apply',
    value: function apply(compiler) {
      var _cdn = this.cdn,
          _cdn$css = _cdn.css,
          css = _cdn$css === undefined ? [] : _cdn$css,
          _cdn$js = _cdn.js,
          js = _cdn$js === undefined ? [] : _cdn$js;

      compiler.plugin('compilation', function (compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-generation', function (htmlPluginData) {
          var _htmlPluginData$asset;

          (_htmlPluginData$asset = htmlPluginData.assets.css).unshift.apply(_htmlPluginData$asset, _toConsumableArray(css));
          if (process.env.NODE_ENV === 'production') {
            var _htmlPluginData$asset2;

            (_htmlPluginData$asset2 = htmlPluginData.assets.js).unshift.apply(_htmlPluginData$asset2, _toConsumableArray(js));
          }
        });
      });
    }
  }]);

  return AssetsToCDN;
}();

module.exports = AssetsToCDN;
'use strict';

var postcss = require('postcss');
var Px2vw = require('./px2vw');

module.exports = postcss.plugin('postcss-px2vw', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2vwIns = new Px2vw(options);
    var newCssText = px2vwIns.generatevw(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});

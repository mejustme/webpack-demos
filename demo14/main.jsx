var data = require('data');
/* 1 最终被解析为这样*/
/*function(module, exports) {

  module.exports = data;

},*/
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>{data}</h1>,
  document.body
);

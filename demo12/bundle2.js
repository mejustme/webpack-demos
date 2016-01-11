webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	__webpack_require__.e/* nsure */(1/* duplicate */, function () {
	  var Hello = React.createClass({
	    getInitialState: function getInitialState() {
	      return { name: __webpack_require__(159) };
	    },
	    render: function render() {
	      return React.createElement(
	        'h1',
	        null,
	        this.state.a
	      );
	    }
	  });

	  ReactDOM.render(React.createElement(Hello, null), document.getElementById('a'));
	});

/***/ }
]);
var React = require('react');
var ReactDOM = require('react-dom');
require.ensure(['./a'],function(){
  var Hello = React.createClass({
    getInitialState: () => {
      return{name: require("./a")}
    },
    render: function() {
      return (
          <h1>
            {this.state.name}
          </h1>
      );
    }
  });

  ReactDOM.render(
      <Hello></Hello>,
      document.getElementById('a')
  );
})


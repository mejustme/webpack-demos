const React = require('react');
const ReactDOM = require('react-dom');

var Hello = React.createClass({
  getInitialState: () => {
    return{name:"xxx"}
  },
  doclick: function() {
      this.setState({name: "lulu"})
  },
  render: function() {
    return (
        <h1 onClick={this.doclick}>
          Hello, world! {this.state.name}
        </h1>
    );
  }
});

ReactDOM.render(
  <Hello></Hello>,
  document.body
);

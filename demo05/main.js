require('./app.scss');

const React = require('react');
const ReactDOM = require('react-dom');

var Hello = React.createClass({
    getInitialState: () => {
        return{src: require("./small.png")}
    },
    doclick: function() {
        this.setState({src: require("./big.png")})
    },
    render: function() {
        return (
            <div>
                <h1 onClick={this.doclick}>
                    点击更新图片
                </h1>
                <img src={this.state.src}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello></Hello>,
    document.body
);

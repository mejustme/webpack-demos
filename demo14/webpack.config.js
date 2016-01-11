module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    //  "jquery": "jQuery"
    //告诉webpack 这个require要通过全局里拿，不是加载打包的
    'data': 'data1'
    /* 1 最终被解析为这样*/
    /*function(module, exports) {

     module.exports = data1;

     },*/
  }
};

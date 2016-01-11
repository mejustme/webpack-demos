var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    app: './main.js',
    //page1: "./xxx.js",
    //page2: "./xxx.js",

    //ju_common: ['jquery','underscore'],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    // 手动添加数组的公共模块，合并到一个模块中，上面对应的名字是数组
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'ju_common', /* filename= */'vendor.js')
    // 注意和下面不同，下面是合并提取  指定的几个入口文件  共有的文件到一个文件中，自动分析公共模块
    //new CommonsChunkPlugin("vendor.js", ["page1","page2"])
    //注意也和上面不同，自动提取，所有入口文件  ，共有的文件到一个文件中，自动分析公共模块
    //  new CommonsChunkPlugin('init.js')
  ]
};
/*
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    p1: "./page1",
    p2: "./page2",
    p3: "./page3",
    ap1: "./admin/page1",
    ap2: "./admin/page2"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
    new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
  ]
};*/
// <script>s required:
// page1.html: commons.js, p1.js
// page2.html: commons.js, p2.js
// page3.html: p3.js
// admin-page1.html: commons.js, admin-commons.js, ap1.js
// admin-page2.html: commons.js, admin-commons.js, ap2.js
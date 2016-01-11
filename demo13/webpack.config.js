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
    // �ֶ��������Ĺ���ģ�飬�ϲ���һ��ģ���У������Ӧ������������
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'ju_common', /* filename= */'vendor.js')
    // ע������治ͬ�������Ǻϲ���ȡ  ָ���ļ�������ļ�  ���е��ļ���һ���ļ��У��Զ���������ģ��
    //new CommonsChunkPlugin("vendor.js", ["page1","page2"])
    //ע��Ҳ�����治ͬ���Զ���ȡ����������ļ�  �����е��ļ���һ���ļ��У��Զ���������ģ��
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
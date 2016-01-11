var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9090',
    //����������Щ�ļ�Ҳ�ᱻ������뵽bundle.js �����Ϳ����Զ�ˢ�£������ܶ�̬����ĳ��ģ�飬�����Ƕ�̬����ȫ���ļ�
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    }]
  }
};

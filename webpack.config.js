const HtmlPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { node: '10' },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlPlugin({
      title: 'Ingaia',
      template: 'src/index.html',
    }),
  ],
}

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnext = require('postcss-cssnext');
const config = require('./');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, '../src'),
  entry: [
    //'webpack-dev-server/client?http://localhost:3001',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '../static'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            ['es2015', {modules: false}], 'stage-0', 'react'
          ],
          plugins: [
            'react-hot-loader/babel',
            'transform-decorators-legacy',
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('../src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      //minChunks: Infinity,
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      postcss: [
        cssnext({
          browsers: ['last 2 versions', 'IE > 10'],
        }),
      ]
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    })
  ],

  devServer: {
    contentBase: '../src',
    historyApiFallback: true,
    host: config.host,
    hot: true,
    port: config.port + 1,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    },
    proxy: {
      '/api': `http://${config.host}:${config.port}`,
    }
  },

  target: 'web', // Make web variables accessible to webpack, e.g. window

};

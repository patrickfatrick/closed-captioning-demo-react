var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, '/public/dist/'),
    publicPath: '/public/dist/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!standard'
    }
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'window.fetch': 'exports?self.fetch!whatwg-fetch'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.unshift(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  )
} else {
  module.exports.devtool = '#source-map'
}

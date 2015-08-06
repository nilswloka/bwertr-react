module.exports = {
  entry: {
    app: ['./src/app.jsx']
  },
  output: {
    path: './lib',
    publicPath: '/lib',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

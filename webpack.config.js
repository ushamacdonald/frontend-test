module.exports = {
  entry: './index.js',
  output: 'bundle.js',
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.min.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      compress: true,
      hot: true,
    },
    devtool: 'source-map'
  }

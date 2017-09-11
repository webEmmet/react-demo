module.exports = {
  devServer: {
    historyApiFallback: true
  },
  context: __dirname + '/src',
  entry: './app.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/src',
    filename: 'bundle.js'
  }
}
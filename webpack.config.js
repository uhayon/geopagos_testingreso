module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://geopagos-challenge.s3.amazonaws.com',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // cacheDirectory: true,
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader?limit=8192'
          }
        ]
      }
    ]
  }
};

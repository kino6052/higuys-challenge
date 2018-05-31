const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: [/node_modules/, /tests/],
      }
    ]
  },
  resolve: {
    extensions: [ '.jsx', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

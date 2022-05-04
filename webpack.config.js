const path = require('path');

module.exports = {
  entry: './src/code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'bable-loader' }], // babel.config.js를 이용한다.
  },
  optimization: { minimizer: [] }, // 압축
};

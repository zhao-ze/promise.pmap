const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    globalObject: 'this',
    library: 'promise_pmap',
    libraryTarget: 'umd',
  },
};

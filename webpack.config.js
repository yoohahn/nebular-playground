const { join } = require('path');

module.exports = () => {
  const config = {
    devtool: 'source-map',
    entry: ['./src/index.js'],
    output: {
      jsonpFunction: '__reactTableJSONP__',
      filename: 'table.js',
      libraryTarget: 'umd',
      path: join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {},
  };

  return config;
};

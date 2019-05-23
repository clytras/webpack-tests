const path = require('path');

module.exports = {
  entry: "./src/main.js",
  /*output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: 'commonjs2'
  },*/
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  node: {
    //fs: 'empty'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
  ]
}
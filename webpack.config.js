const webpack = require('webpack');
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "client/dist");
const APP_DIR = path.resolve(__dirname, "client/src");

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"]
      }
    ]
  }
};

const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:{
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env", {
                  modules: false,
                  targets: {
                    browsers: [
                      "last 2 Chrome versions",
                      "last 2 Firefox versions",
                      "last 2 Safari versions",
                      "last 2 iOS versions",
                      "last 1 Android version",
                      "last 1 ChromeAndroid version",
                      "ie 11"
                    ]
                  }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
});

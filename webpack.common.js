const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name]-[hash].app.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all', 
          enforce: true
        }
      }
    }
  },
  
  module: {
    rules: [
      {
        test:/\.css$/i,
        use : [
          {
            loader: MiniCssExtractPlugin.loader
          }
          , 'css-loader']
      },
      {
        test:/\.(sa|sc)ss$/i,
        use : [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/styles/'
            }
          }
          , 'css-loader', {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              webpackImporter: false,
              sassOptions: {
                includePaths: ['./node_modules']
              }
            }
          }]
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
            }
        }]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash].style.css',
      chunkFilename: '[name]-[hash].style.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/mocked-data/'),
          to: path.resolve(__dirname, 'dist/data/')
        }
      ],
    }),
  ],
};

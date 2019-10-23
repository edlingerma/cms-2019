const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: 
    [
      {
        test: [/\.scss$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
          name: "./img/[hash].[ext]"
            },
        },
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: './styles.css',
    })
  ]
};

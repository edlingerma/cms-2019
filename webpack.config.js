const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: 
    [
      {
        test: [/\.scss$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
          name: "./src/images/[hash].[ext]"
            },
        },
      },
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true
    })
  ]
};

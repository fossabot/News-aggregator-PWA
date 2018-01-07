const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom", "react-router"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "static/js/[name].[hash:8].chunk.js",
    filename: "static/js/[name].[hash:8].js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src", "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin("static/css/[name].[contenthash:8].css")
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader", options: { minimize: true } }]
        })
      },

      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[hash].[ext]" }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", "jsx"]
  }
};

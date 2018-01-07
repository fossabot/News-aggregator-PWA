const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "./report/bundle-report.html",
      openAnalyzer: false
    })
  ]
});

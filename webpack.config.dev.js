const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const PUBLIC_DIR_PATH = path.join(__dirname, "public");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: PUBLIC_DIR_PATH,
    // publicPath 非常重要，决定了页面引用的资源相对于的路径是什么
    // 默认相对于页面路径加载
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: PUBLIC_DIR_PATH,
    historyApiFallback: true,
    open: true,
    hot: true,
    overlay: {
      error: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index-template.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  watch: true
});

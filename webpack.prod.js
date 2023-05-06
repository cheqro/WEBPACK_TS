const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin  = require("webpack-manifest-plugin");
const path = require("path");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");



module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin(undefined)],
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mainConfig = {
  target: "electron-main",
  entry: path.resolve(__dirname, "src/main/main.js"),
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/main")]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  }
};

const rendererConfig = {
  target: "electron-renderer",
  entry: path.resolve(__dirname, "src/renderer/index.js"),
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/renderer")]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "root",
    }),
  ]
};

module.exports = [
  mainConfig,
  rendererConfig,
];

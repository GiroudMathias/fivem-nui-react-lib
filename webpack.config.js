var path = require("path");
var config = {
  entry: ["./lib/ui/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
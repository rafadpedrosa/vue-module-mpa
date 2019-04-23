const { VueLoaderPlugin } = require("vue-loader")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  test_module: {
    submodule: {
      name: "./src/modules/test/main.js",
      _path: "modules/test/"
    }
  },
  commonConfig: {
    mode: "development",
    devServer: {
      contentBase: "dist/",
      overlay: true,
      stats: {
        colors: true
      },
      hot: true
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader"
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "../../../images/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/local/index.html"
      })
    ],
  },
  outputFolder: "../dist/"
}

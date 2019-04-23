const { VueLoaderPlugin } = require("vue-loader")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  jdm: {
    dashboard: {
      name: "./src/modules/jdm/dashboard/main.js",
      _path: "modules/jdm/dashboard/"
    },
    test: {
      name: "./src/modules/jdm/test/main.js",
      _path: "modules/jdm/test/"
    }
  },
  pp: {
    dashboard: {
      name: "./src/modules/pp/dashboard/main.js",
      _path: "modules/pp/dashboard/"
    },
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
  outputFolder: "../dist/prod/"
}

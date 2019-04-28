const { VueLoaderPlugin } = require("vue-loader")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  test: {
    submodule: {
      name: "./src/modules/test/main.js",
      _path: "test/"
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
          exclude: file => (
              /node_modules/.test(file) &&
              !/\.vue\.js/.test(file)
          ),
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["es2015"] }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "vue-style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader:'vue-style-loader'
            },
            {
              loader:'css-loader'
            },
            {
              loader:'sass-loader',
              options: {
                data: `$red-color: black;`
              }
            }
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "./dist/images/[name].[ext]"
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
  outputFolder: "../../web-app/js/dist/"
}

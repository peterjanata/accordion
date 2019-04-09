// Webpack uses this to work with directories
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

require("es6-promise").polyfill();

module.exports = {
  entry: "./src/javascript/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Resolves url() and @imports inside CSS
            loader: "css-loader"
          },
          {
            // Apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // Transform SASS to standard CSS
            loader: "sass-loader"
          }
        ]
      },
      {
        // Apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          }
        ]
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    }),

    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /\/node_modules/,
      uglifyOptions: {
        ecma: 6,
        mangle: false
      }
    })
  ],

  mode: "development"
};

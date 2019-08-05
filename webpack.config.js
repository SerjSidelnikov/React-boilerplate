const path = require(`path`);
const webpack = require(`webpack`);

const isDevelopment = process.env.NODE_ENV === `development`;
const isProduction = !isDevelopment;

module.exports = {
  entry: `./src/index.js`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `index.js`,
  },

  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
    historyApiFallback: true,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `style-loader`,
            options: {
              sourceMap: true,
            }
          },
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
            }
          },
          {
            loader: `postcss-loader`,
            options: {
              plugins: [
                require(`autoprefixer`),
                isProduction ? require(`cssnano`) : () => {},
              ],
            }
          },
          {
            loader: `sass-loader`,
            options: {
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [`file-loader`]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [`file-loader`]
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: [`.js`, `.jsx`]
  },

  devtool: `source-map`,
};

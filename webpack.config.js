const path = require(`path`);

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
            loader: `sass-loader`,
            options: {
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
    ],
  },

  resolve: {
    extensions: [`.js`, `.jsx`]
  },

  devtool: `source-map`,
};

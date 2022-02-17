const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin")



module.exports = {

  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      },

      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],

      },

      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

    ],
  },

  // optimization: {},

  plugins: [
    new HtmlWebpack({
      title: 'Mi webpack App',
      // filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtract({
      filename: 'estilo.css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/asset/', to: 'assets/' }]
    }),
  ],

}
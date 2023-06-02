var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // a string here because there is one file as an entry point
  // if there is more than one, then use an array
  entry: {
    index: './src/index.ts',
    fundamentals: './src/fundamentals/fundamentals.ts',
    keyframes: './src/keyframes/keyframes.ts',
    transitions: './src/transitions/transitions.ts'
  },
  //  tell webpack to extract source maps and into our final bundle
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  devServer: {
    port: 10001
  },
  // the path and name of the file that will be generated, and to be referenced in the html file
  // output: {
  //   // path: __dirname + '/dist',
  //   path: path.resolve(__dirname, './dist'),
  //   filename: '[name].js'
  // },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: (pathData) => {
      return pathData.chunk.name === 'index' ? '[name].js' : '[name]/[name].js';
    }
  },
  resolve: {
    alias: {
      _src: path.resolve(__dirname, '/src')
    },
    //   // by default Webpack does no load .ts and .tsx files so it needs to be told
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.png', '.svg', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index'],
      inject: true
    }),

    new HtmlWebpackPlugin({
      filename: 'fundamentals/index.html',
      template: 'src/fundamentals/index.html',
      chunks: ['fundamentals'],
      inject: true
    }),

    new HtmlWebpackPlugin({
      filename: 'keyframes/index.html',
      template: 'src/keyframes/index.html',
      chunks: ['keyframes'],
      inject: true
    }),

    new HtmlWebpackPlugin({
      filename: 'transitions/index.html',
      template: 'src/transitions/index.html',
      chunks: ['transitions'],
      inject: true
    })
  ],
  module: {
    rules: [
      {
        // a regular expression that tests what kind of files to run through this loader
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /dist/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};

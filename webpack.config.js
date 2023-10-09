var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = [
  'choreography',
  'fundamentals',
  'keyframes',
  'transitions',
  'states',
  'ripple',
  'pulse'
];
let entry = {
  index: './src/index.ts'
};
const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    chunks: ['index'],
    inject: true
  })
];
createHtmlPluginsAndEntries();

module.exports = {
  mode: 'development',
  // a string here because there is one file as an entry point
  // if there is more than one, then use an array
  entry,
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
  plugins,
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

function createHtmlPluginsAndEntries() {
  parts.forEach((part) => {
    entry = { ...entry, [part]: `./src/${part}/index.ts` };
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `${part}/index.html`,
        template: `src/${part}/index.html`,
        chunks: [`${part}`],
        inject: true
      })
    );
  });
}

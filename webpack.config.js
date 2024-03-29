
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const config= {
  entry: {
    index: {
      import: './src/index.tsx',
      dependOn: 'shared',
    },
    shared: ['react', './src/store'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-transform-react-jsx"]
          }
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
      },
      {
        test: /\.(jsx)?$/,
        use: 'jsx-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(ttf|jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name].[ext]?[hash]',
            limit: 10000
          }
        },

      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    compress: true
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].chunk.js',
  },
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
};

module.exports = () => {
  if (isProduction) {
    return {
      ...config,
      mode: 'production'
    };
  } else {
    return {
      ...config,
      mode: 'development'
    };
  }
};
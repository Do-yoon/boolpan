const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
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
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  output: {
    filename: '[name].bundle.ts',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({configFile: 'src/tsconfig.json'})]
},
};
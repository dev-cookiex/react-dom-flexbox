import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import path from 'path'
import HtmlWebacpkPlugin from 'html-webpack-plugin'

interface Configuration extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration
}

const configuration: Configuration = {
  entry: path.resolve( 'src', 'index.webpack.tsx' ),
  module: {
    rules: [ {
      test: /\.[jt]sx?$/,
      use: [ 'babel-loader', 'ts-loader' ],
      exclude: [ path.resolve( 'node_modules' ) ]
    } ]
  },
  plugins: [
    new HtmlWebacpkPlugin()
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.json', '.js', '.jsx' ]
  }
}

export default configuration

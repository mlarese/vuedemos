'use strict'
process.env.NODE_ENV = 'production'

const exec = require('child_process').execSync
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const OfflinePlugin = require('offline-plugin')
const BabiliPlugin = require("babili-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const base = require('./webpack.base')
const pkg = require('../package')
const _ = require('./utils')
const config = require('./config')

if (config.electron) {
  // remove dist folder in electron mode
  exec('rm -rf app/assets/')
} else {
  // remove dist folder in web app mode
  exec('rm -rf dist/')
  // use source-map in web app mode
  base.devtool = 'source-map'
}

// a white list to add dependencies to vendor chunk
base.entry.vendor = config.vendor
// use hash filename to support long-term caching
base.output.filename = '[name].js'
// add webpack plugins
base.plugins.push(
  new ProgressPlugin(),
  new ExtractTextPlugin('styles.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new BabiliPlugin({ comments: false ,removeConsole :true }),
  /*
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  */
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js'
  }),

    // service worker caching
    //new SWPrecacheWebpackPlugin({  cacheId: 'fe-vue-app',   filename: 'service-worker.js',    staticFileGlobs: ['dist/**/*.{js,html,css}'], minify: true, stripPrefix: 'dist/'  }),

  // progressive web app
  // it uses the publicPath in webpack config
  new OfflinePlugin({
    relativePaths: false,
    AppCache: false,
    ServiceWorker: {
      events: true
    }
  })
)

// extract css in standalone css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  base.module.loaders.push({
    test: processor.test,
    loader: ExtractTextPlugin.extract({
      use: [_.cssLoader].concat(loaders),
      fallback: 'style-loader'
    })
  })
})

// minimize webpack output
base.stats = {
  // Add children information
  children: false,
  // Add chunk information (setting this to `false` allows for a less verbose output)
  chunks: false,
  // Add built modules information to chunk information
  chunkModules: false,
  chunkOrigins: false,
  modules: false
}

module.exports = base

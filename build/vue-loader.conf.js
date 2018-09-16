'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
// config vue loader
// { loaders:
//   { css: [ 'vue-style-loader', [Object] ],
//     postcss: [ 'vue-style-loader', [Object] ],
//     less: [ 'vue-style-loader', [Object], [Object] ],
//     sass: [ 'vue-style-loader', [Object], [Object] ],
//     scss: [ 'vue-style-loader', [Object], [Object] ],
//     stylus: [ 'vue-style-loader', [Object], [Object] ],
//     styl: [ 'vue-style-loader', [Object], [Object] ] },
//  cssSourceMap: true,
//  cacheBusting: true,
//  transformToRequire:
//   { 
//     video: [ 'src', 'poster' ],
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href' 
//   } 
// }


// dev output what ?
// 

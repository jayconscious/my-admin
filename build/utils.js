'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')


exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  // dev options = {
  //  sourceMap: true,
  //  extract: fales
  // }
  options = options || {} // do like this ? whatever is const or let ?
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  // generate loader string to be used with extract text plugin
  // cssLoader = {
  //   loader: 'css-loader',
  //   options: {
  //     sourceMap: true
  //   }
  // }
  function generateLoaders (loader, loaderOptions) {
    // options.usePostCSS  fales
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    // loaders = [{
    //   loader: 'css-loader',
    //   options: {
    //     sourceMap: true
    //   }
    // }]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    // 注意 webpack的loader的处理是自下而上的顺序
    // less
    // loaders = [{
    //   loader: 'css-loader',
    //   options: {
    //     sourceMap: true
    //   }
    // },{
    //   loader: 'less-loader',
    //   options: {
    //     sourceMap: true
    //   }
    // }]
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(), // ['vue-style-loader',
                            //   {
                            //   loader: 'css-loader',
                            //   options: {
                            //     sourceMap: true
                            //   }
                            // }]
    postcss: generateLoaders(), // 同上
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    // ['vue-style-loader', 
    // {
    //   loader: 'css-loader',
    //   options: {
    //     sourceMap: true
    //   }
    // },{
    //   loader: 'sass-loader',
    //   options: {
    //     sourceMap: true,
    //     indentedSyntax: true
    //   }
    // }
    // ]

    // loaders = [{
    //   loader: 'css-loader',
    //   options: {
    //     sourceMap: true
    //   }
    // },{
    //   loader: 'sass-loader',
    //   options: {
    //     sourceMap: true,
    //     indentedSyntax: true
    //   }
    // }]

    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  // dev
  // options = {
  //   sourceMap: true,
  //   usePostCSS: true
  // }
  const output = []
  const loaders = exports.cssLoaders(options)

  console.log('loaders')
  console.log(loaders)
// { css:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] } ],
//  postcss:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] } ],
//  less:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] },
//     { loader: 'less-loader', options: [Object] } ],
//  sass:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] },
//     { loader: 'sass-loader', options: [Object] } ],
//  scss:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] },
//     { loader: 'sass-loader', options: [Object] } ],
//  stylus:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] },
//     { loader: 'stylus-loader', options: [Object] } ],
//  styl:
//   [ 'vue-style-loader',
//     { loader: 'css-loader', options: [Object] },
//     { loader: 'postcss-loader', options: [Object] },
//     { loader: 'stylus-loader', options: [Object] } ] 
// }

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

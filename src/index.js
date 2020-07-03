class AssetsToCDN {
  constructor (cdn) {
    this.cdn = cdn
  }

  apply (compiler) {
    const { css = [], js = [] } = this.cdn
    compiler.hooks.compilation.tap('compilation', (compilation)=> {
      compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tap('html-webpack-plugin-before-html-generation',(htmlPluginData)=> {
          htmlPluginData.assets.css.unshift(...css)
          if (process.env.NODE_ENV === 'production') {
            htmlPluginData.assets.js.unshift(...js)
          }
        }
      )
    })
  }
}

module.exports = AssetsToCDN

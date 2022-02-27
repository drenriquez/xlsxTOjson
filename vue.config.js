// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true
        // Or, for multiple preload files:
      }
    }
  }
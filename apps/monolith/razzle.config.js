"use strict"

module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config // stay immutable here

    // Change the name of the server output file in production
    appConfig.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    })

    return appConfig
  }
}

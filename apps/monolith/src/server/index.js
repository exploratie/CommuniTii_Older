import React from "react"
import { GraphQLServer } from "graphql-yoga"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import express from "express"

import App from "common/App"
import renderHtml from "./lib/renderHtml"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.express
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get(/[^graphql]$/, (req, res) => {
    const sheet = new ServerStyleSheet()
    const markup = renderToString(sheet.collectStyles(<App />))
    const styles = sheet.getStyleTags()
    const html = renderHtml({ markup, styles, assets })
    res.send(html)
  })

export default server

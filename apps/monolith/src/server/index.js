import React from "react"
import { GraphQLServer } from "graphql-yoga"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import express from "express"
import { makeExecutableSchema, mergeSchemas } from "graphql-tools"

import App from "common/App"
import renderHtml from "./lib/renderHtml"

import schemas from "./typeDefs"
import resolvers from "./resolvers"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const schema = mergeSchemas({
  schemas,
  resolvers
})

const server = new GraphQLServer({
  schema
})

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

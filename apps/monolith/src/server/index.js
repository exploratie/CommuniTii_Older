import React from "react"
import express from "express"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"

import App from "common/App"
import renderHtml from "./lib/renderHtml"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    // USE Pipe operators once there's better support from eslint
    // <App />
    //  |> renderToString
    //  |> (markup => renderHtml({markup, assets }))
    //  |> res.send
    const sheet = new ServerStyleSheet()
    const markup = renderToString(sheet.collectStyles(<App />))
    const styles = sheet.getStyleTags()
    const html = renderHtml({ markup, styles, assets })
    res.send(html)
  })

export default server

import React from "react"
import { renderToStaticMarkup, renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import { ApolloProvider, renderToStringWithData } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { SchemaLink } from "apollo-link-schema"
import { InMemoryCache } from "apollo-cache-inmemory"

import Html from "./Html"
import App from "common/App"

export default async schema => {
  const client = new ApolloClient({
    ssr: true,
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  })
  const sheet = new ServerStyleSheet()
  const markup = await renderToStringWithData(
    sheet.collectStyles(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  )
  const styles = sheet.getStyleTags()
  const html = (
    <Html
      markup={markup}
      styles={styles}
      assets={require(process.env.RAZZLE_ASSETS_MANIFEST)}
      client={client}
    />
  )

  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}

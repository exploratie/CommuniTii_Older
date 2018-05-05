import React from "react"
import { renderToStaticMarkup, renderToString } from "react-dom/server"
import { ApolloProvider, renderToStringWithData } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { SchemaLink } from "apollo-link-schema"
import { InMemoryCache } from "apollo-cache-inmemory"
import JssProvider from "react-jss/lib/JssProvider"
import { SheetsRegistry } from "react-jss/lib/jss"
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "material-ui/styles"

import Html from "./Html"
import App from "common/App"
import theme from "common/lib/theme"

export default async schema => {
  const client = new ApolloClient({
    ssr: true,
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  })

  const generateClassName = createGenerateClassName()
  const sheetsRegistry = new SheetsRegistry()

  const markup = await renderToStringWithData(
    <ApolloProvider client={client}>
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </ApolloProvider>
  )

  const html = (
    <Html
      markup={markup}
      styles={sheetsRegistry.toString()}
      assets={require(process.env.RAZZLE_ASSETS_MANIFEST)}
      client={client}
    />
  )

  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}

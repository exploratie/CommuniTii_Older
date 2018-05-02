import React from "react"
import { hydrate } from "react-dom"
import App from "common/App"
import { ApolloProvider } from "react-apollo"

import createClient from "./lib/initApollo"

const client = createClient()

const AppContainer = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

hydrate(AppContainer, document.getElementById("root"))

if (module.hot) module.hot.accept()

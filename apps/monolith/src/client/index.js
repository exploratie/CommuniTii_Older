import React from "react"
import { hydrate } from "react-dom"
import App from "common/App"
import { ApolloProvider } from "react-apollo"
import { MuiThemeProvider } from "material-ui/styles"
import { BrowserRouter } from "react-router-dom"

import createClient from "./lib/initApollo"
import theme from "common/lib/theme"

const client = createClient()

class AppContainer extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App {...this.props} />
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

window.addEventListener("DOMContentLoaded", () => {
  hydrate(
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>,
    document.getElementById("root")
  )
})

if (module.hot) module.hot.accept()

import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
import { Provider as ReduxProvider } from "react-redux"

import createStore from "./lib/initStore"

const store = createStore()

const renderApp = App =>
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById("app")
  )

renderApp(App)

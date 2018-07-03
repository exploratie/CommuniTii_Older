import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
import { Provider as ReduxProvider } from "react-redux"

import allReducers from "./reducers"
import createStore from "./lib/initStore"

const store = createStore(allReducers)

const renderApp = App =>
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById("app")
  )

renderApp(App)

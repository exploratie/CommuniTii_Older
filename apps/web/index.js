import React from "react"
import { render } from "react-dom"
import App from "./App"

const renderApp = App => render(<App />, document.getElementById("app"))

renderApp(App)

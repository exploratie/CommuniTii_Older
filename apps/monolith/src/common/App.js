import React from "react"
import { hot } from "react-hot-loader"

import TestContainer from "./containers/TestContainer"

const App = () => (
  <div>
    <h1>Hi</h1>
    <TestContainer />
  </div>
)

export default hot(module)(App)

import React from "react"
import { hot } from "react-hot-loader"
import Test from "./LocalTest"

const App = () => (
  <div>
    <h1>This is Communitii</h1>
    <Test />
  </div>
)

export default hot(module)(App)

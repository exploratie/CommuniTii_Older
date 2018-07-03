import React, { Fragment } from "react"
import { hot } from "react-hot-loader"
import { Link } from "react-router-dom"
import Pages from "../pages"

const App = () => (
  <Fragment>
    <h1>This is Communitii</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Pages />
  </Fragment>
)

export default hot(module)(App)

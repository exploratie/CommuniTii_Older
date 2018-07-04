import React, { Fragment } from "react"
import { hot } from "react-hot-loader"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { compose } from "recompose"

import withMaterialRoot from "../lib/withMaterialRoot"
import Pages from "../pages"

const App = () => (
  <Fragment>
    <Helmet>
      <title>CommuniTii</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Pages />
  </Fragment>
)

export default compose(hot(module), withMaterialRoot)(App)

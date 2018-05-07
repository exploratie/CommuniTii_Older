import React, { Fragment } from "react"
import { hot } from "react-hot-loader"
import CssBaseline from "material-ui/CssBaseline"
import { Route, Switch } from "react-router-dom"

import "typeface-roboto/index.css"
import "material-design-icons/iconfont/material-icons.css"

import Pages from "./pages"

const App = () => (
  <Fragment>
    <CssBaseline />
    <Switch>
      {Pages.map(({ path, exact, component: Component, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => <Component {...props} {...rest} />}
        />
      ))}
    </Switch>
  </Fragment>
)

export default hot(module)(App)

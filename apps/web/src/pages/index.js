import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "./home"
import LoginPage from "./login"
import TestPage from "./test"

const Pages = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/test" component={TestPage} />
  </Switch>
)

export default Pages

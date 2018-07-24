import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "./home"
import LoginPage from "./login"
import TestPage from "./test"
import AdminPage from "./admin"
import NotFoundPage from "./notFound"

const Pages = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/test" component={TestPage} />
    <Route path="/admin" component={AdminPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Pages

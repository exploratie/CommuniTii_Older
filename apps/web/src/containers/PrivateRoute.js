import React from "react"
import Route from "react-router-dom/Route"
import { firebaseConnect, isEmpty, isLoaded } from "react-redux-firebase"
import { connect } from "react-redux"
import { compose } from "recompose"
import { node } from "prop-types"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={renderProps => {}} />
)

PrivateRoute.propTypes = {
  component: node
}

export default compose(
  firebaseConnect(),
  connect()
)(PrivateRoute)

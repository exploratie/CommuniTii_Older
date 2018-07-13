import { push } from "connected-react-router"
import { func, object, shape } from "prop-types"
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { firebaseConnect, isEmpty, isLoaded } from "react-redux-firebase"
import { compose } from "recompose"

import SigninForm from "../components/SigninForm"

class SigninFormContainer extends PureComponent {
  state = {}

  static propTypes = {
    auth: object,
    push: func,
    firebase: shape({ auth: func })
  }

  static getDerivedStateFromProps(props) {
    if (isLoaded(props.auth) && !isEmpty(props.auth)) {
      props.push("/")
    }
    return null
  }

  handleSubmit = async ({ email, password }) => {
    try {
      await this.props.firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      this.props.push("/")
    } catch (e) {
      throw new Error(e.message)
    }
  }

  render() {
    return <SigninForm onSubmit={this.handleSubmit} />
  }
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase: { auth } }) => ({ auth }),
    { push }
  )
)(SigninFormContainer)

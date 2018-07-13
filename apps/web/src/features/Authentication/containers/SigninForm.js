import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { firebaseConnect } from "react-redux-firebase"
import { compose } from "recompose"

import SigninForm from "../components/SigninForm"

class SigninFormContainer extends PureComponent {
  handleSubmit = async ({ email, password }) => {
    console.log("Form submitted", email, password)
    const { firebase } = this.props
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
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
  connect(({ firebase: { auth } }) => ({ auth }))
)(SigninFormContainer)

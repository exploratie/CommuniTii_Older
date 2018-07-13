import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { func, object } from "prop-types"
import React from "react"
import { compose } from "recompose"
import { Field, reduxForm } from "redux-form"

const styles = theme => ({
  container: { display: "flex", flexDirection: "column" },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const renderTextField = (
    {input, ...restProps}  // eslint-disable-line
) => <TextField {...input} {...restProps} />

const SigninForm = ({ classes, handleSubmit }) => (
  <Paper onSubmit={handleSubmit} component="form" className={classes.container}>
    {" "}
    <Field
      component={renderTextField}
      className={classes.textField}
      id="email"
      label="Email"
      margin="normal"
      name="email"
    />{" "}
    <Field
      component={renderTextField}
      className={classes.textField}
      id="password"
      label="Password"
      margin="normal"
      type="password"
      autoComplete="current-password"
      name="password"
    />
    <Button variant="contained" type="submit">
      Submit
    </Button>
  </Paper>
)

SigninForm.propTypes = {
  classes: object,
  handleSubmit: func
}

export default compose(
  reduxForm({ form: "signin" }),
  withStyles(styles)
)(SigninForm)

// TODO: Add styling
// TODO: Add proper error handling login form

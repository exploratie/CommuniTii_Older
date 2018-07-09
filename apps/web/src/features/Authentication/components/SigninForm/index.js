import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { object } from "prop-types"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const SigninForm = ({ classes }) => (
  <Paper component="form">
    <TextField
      className={classes.textField}
      id="email"
      label="Email"
      margin="normal"
    />
    <TextField
      className={classes.textField}
      id="password"
      label="Password"
      margin="normal"
      type="password"
      autoComplete="current-password"
    />
    <Button>Submit</Button>
  </Paper>
)

SigninForm.propTypes = {
  classes: object
}

export default withStyles(styles)(SigninForm)

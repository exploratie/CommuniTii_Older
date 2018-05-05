import React from "react"
import { hot } from "react-hot-loader"
import "typeface-roboto/index.css"
import "material-design-icons/iconfont/material-icons.css"
import CssBaseline from "material-ui/CssBaseline"
import Typography from "material-ui/Typography"

import TestContainer from "./containers/TestContainer"

const App = () => (
  <div>
    <CssBaseline />
    <Typography variant="display1" gutterBottom>
      Hi
    </Typography>
    <TestContainer />
  </div>
)

export default hot(module)(App)

import React from "react"
import { func, number } from "prop-types"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const Test = ({ add, substract, score }) => (
  <div>
    <Typography gutterBottom variant="body2">
      {score}
    </Typography>
    <Button variant="contained" color="primary" onClick={() => add(1)}>
      Add
    </Button>
    <Button variant="contained" color="secondary" onClick={() => substract(1)}>
      Subtract
    </Button>
  </div>
)

Test.propTypes = {
  add: func,
  substract: func,
  score: number
}

export default Test

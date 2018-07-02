import React from "react"
import { func, number } from "prop-types"

const Test = ({ add, substract, score }) => (
  <div>
    <span>{score}</span>
    <button onClick={() => add(1)}>Add</button>
    <button onClick={() => substract(1)}>Subtract</button>
  </div>
)

Test.propTypes = {
  add: func,
  substract: func,
  score: number
}

export default Test

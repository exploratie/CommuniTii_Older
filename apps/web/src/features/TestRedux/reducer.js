import { localAdd, localSubstract } from "./types"

const initialState = {
  score: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case localAdd:
    case localSubstract:
      return { ...state, score: state.score + payload }
    default:
      return state
  }
}

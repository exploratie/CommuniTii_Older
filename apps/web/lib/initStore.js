import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import loggerMiddleware from "redux-logger"

import allReducers from "../reducers"

export default (preloadedState = {}) => {
  const isDev = process.env.NODE_ENV !== "production"
  const reducers = combineReducers(allReducers)

  const prodMiddlewares = [thunkMiddleware]
  const devMiddlewares = [loggerMiddleware]
  const middlewares = [...prodMiddlewares, ...(isDev ? devMiddlewares : [])]

  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}

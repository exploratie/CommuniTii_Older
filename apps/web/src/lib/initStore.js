import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import loggerMiddleware from "redux-logger"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore } from "redux-firestore"
import { connectRouter, routerMiddleware } from "connected-react-router"

export default (
  allReducers,
  { firebase, history },
  preloadedState = {},
  isDev = process.env.NODE_ENV !== "production"
) => {
  const reducers = combineReducers(allReducers)

  // react-redux-firebase config
  const reduxFirebaseConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableLogging: false,
    enableRedirectHandling: false,
    updateProfileOnLogin: true,
    setProfilePopulateResults: true
  }

  const prodMiddlewares = [
    routerMiddleware(history),
    thunkMiddleware.withExtraArgument(getFirebase)
  ]
  const devMiddlewares = [loggerMiddleware]
  const middlewares = [...prodMiddlewares, ...(isDev ? devMiddlewares : [])]

  const composedArgs = [
    reactReduxFirebase(firebase, reduxFirebaseConfig),
    reduxFirestore(firebase),
    applyMiddleware(...middlewares)
  ]

  return createStore(
    connectRouter(history)(reducers),
    preloadedState,
    composeWithDevTools(...composedArgs)
  )
}

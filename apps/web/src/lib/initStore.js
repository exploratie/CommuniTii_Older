import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import loggerMiddleware from "redux-logger"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore } from "redux-firestore"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createEpicMiddleware } from "redux-observable"

export default (
  { allReducers, allEpics },
  { firebase, history },
  preloadedState = {},
  isDev = process.env.NODE_ENV !== "production"
) => {
  const reducers = combineReducers(allReducers)

  // react-redux-firebase config
  const reduxFirebaseConfig = {
    userProfile: "users",
    presence: "presence", // where list of online users is stored in database
    sessions: "sessions", // where list of user sessions is stored in database (presence must be enabled)
    enableLogging: false,
    enableRedirectHandling: false,
    updateProfileOnLogin: true,
    setProfilePopulateResults: true
  }

  const epicMiddleware = createEpicMiddleware({
    dependencies: { getFirebase }
  })

  // Middlewares setup
  const prodMiddlewares = [
    routerMiddleware(history),
    epicMiddleware,
    thunkMiddleware.withExtraArgument(getFirebase)
  ]
  const devMiddlewares = [loggerMiddleware]
  const middlewares = [...prodMiddlewares, ...(isDev ? devMiddlewares : [])]

  const composedArgs = [
    reactReduxFirebase(firebase, reduxFirebaseConfig),
    reduxFirestore(firebase),
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    connectRouter(history)(reducers),
    preloadedState,
    composeWithDevTools(...composedArgs)
  )

  epicMiddleware.run(allEpics)

  return store
}

// TODO: add hot reloding to redux reducers and redux-observable epics

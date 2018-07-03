import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
import { Provider as ReduxProvider } from "react-redux"

import allReducers from "./reducers"
import createStore from "./lib/initStore"
import getFirebase from "./lib/initFirebase"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
const firebase = getFirebase(firebaseConfig)
firebase.firestore()

const store = createStore(allReducers, firebase)

const renderApp = App =>
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById("app")
  )

renderApp(App)

import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import TestReducer from "./test"

export default {
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  test: TestReducer
}

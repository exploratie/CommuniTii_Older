import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"
import { reducer as formReducer } from "redux-form"

import TestReducer from "../features/TestRedux/reducer"

export default {
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  form: formReducer,
  test: TestReducer
}

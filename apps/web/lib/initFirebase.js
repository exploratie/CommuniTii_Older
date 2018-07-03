import firebase from "@firebase/app"
import "@firebase/firestore"

export default firebaseConfig =>
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

import "@firebase/firestore"
import "@firebase/auth"
import "@firebase/database"
import firebase from "@firebase/app"

export default firebaseConfig =>
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

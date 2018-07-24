import { auth } from "firebase-functions"
import admin from "firebase-admin"

export const createNewUserProfile = auth.user().onCreate(async ({ uid }) => {
  const db = admin.firestore()
  const doc = db.doc(`userProfiles/${uid}`)
  const data = {
    role: ["user"]
  }

  try {
    await doc.set(data)
  } catch (e) {
    throw new Error(e.message)
  }
})

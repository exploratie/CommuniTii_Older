import { auth } from "firebase-functions"
import admin from "firebase-admin"

import { debugInitialized } from "../../utils/initApp"

export const createNewUserProfile = auth.user().onCreate(async ({ uid }) => {
  const db = admin.firestore()
  const collection = db.collection("/userProfiles")
  const doc = collection.doc(`${uid}`)

  try {
    await admin.auth().setCustomUserClaims(uid, {
      user: true,
      provider: false,
      admin: false
    })
    await doc.set({})
    if (debugInitialized) {
      console.log("Created User & termintation function")
    }
  } catch (e) {
    throw new Error(e.message)
  }
})

export const deleteUserProfile = auth.user().onDelete(async ({ uid }) => {
  const db = admin.firestore()
  const collection = db.collection("/userProfiles")
  const doc = collection.doc(`${uid}`)

  try {
    await doc.delete()
    if (debugInitialized) {
      console.log("Deleted User & termintation function")
    }
  } catch (e) {
    throw new Error(e.message)
  }
})

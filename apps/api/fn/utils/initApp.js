import admin from "firebase-admin"
import { start as startStackDebugger } from "@google-cloud/debug-agent"

let debugInitialized = false

const initApp = async () => {
  const stackDebugger = startStackDebugger({ allowExpressions: true })
  await stackDebugger.isReady()
  debugInitialized = true
  admin.initializeApp()
}

export default initApp
export { debugInitialized }

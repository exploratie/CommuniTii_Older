import { MongoConnector, MongoEntity } from "apollo-connector-mongodb"
import lruCache from "lru-cache"
import signale from "signale"

export default async () => {
  const isDev = process.env.NODE_ENV === "development"
  const mongoURL = isDev
    ? `mongodb://localhost:${process.env.RAZZLE_MONGO_DEV_PORT}`
    : `mongodb://${process.env.RAZZLE_MONGO_USER}:${
        process.env.RAZZLE_MONGO_PASSWORD
      }@${process.env.RAZZLE_MONGO_LINK}`

  try {
    if (isDev) {
      const { MongodHelper } = await import("mongodb-prebuilt")
      const mongodHelper = new MongodHelper([
        "--port",
        process.env.RAZZLE_MONGO_DEV_PORT
      ])
      await mongodHelper.run()
      signale.success(`🗄  Started MongoDB for development at ${mongoURL}`)
    }

    const conn = new MongoConnector(mongoURL)
    await conn.connect()

    const Test = new MongoEntity(conn, "test", { cacheMap: lruCache })
    const Users = new MongoEntity(conn, "users", { cacheMap: lruCache })

    return {
      Test,
      Users
    }
  } catch (e) {
    throw new Error(e)
  }
}

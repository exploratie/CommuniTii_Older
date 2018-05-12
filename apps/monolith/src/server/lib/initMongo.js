import { MongoConnector, MongoEntity } from "apollo-connector-mongodb"
import lruCache from "lru-cache"

export default async () => {
  try {
    const mongoURL = `mongodb://${process.env.RAZZLE_MONGO_USER}:${
      process.env.RAZZLE_MONGO_PASSWORD
    }@${process.env.RAZZLE_MONGO_LINK}`

    const conn = new MongoConnector(mongoURL)
    await conn.connect()

    const test = new MongoEntity(conn, "test", { cacheMap: lruCache })

    return {
      test
    }
  } catch (e) {
    throw new Error(e)
  }
}

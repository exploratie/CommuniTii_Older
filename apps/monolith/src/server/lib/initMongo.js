import { MongoConnector, MongoEntity } from "apollo-connector-mongodb"
import lruCache from "lru-cache"

export default async () => {
  const mongoURL = ``
  try {
    const conn = new MongoConnector(mongoURL)
    await conn.connect()

    const test = new MongoEntity(conn, "test", { cacheMap: lruCache })

    return {
      test
    }
  } catch (e) {}
}

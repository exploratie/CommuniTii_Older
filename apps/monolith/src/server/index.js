import express from "express"
import { GraphQLServer } from "graphql-yoga"
import { mergeSchemas } from "graphql-tools"
import initJwt from "express-jwt"

import schemas from "./typeDefs"
import resolvers from "./resolvers"
import ssrRenderer from "./lib/ssrRenderer"
import initMongo from "./lib/initMongo"

export default async () => {
  const allEntities = await initMongo()

  const schema = mergeSchemas({
    schemas,
    resolvers
  })

  const context = {
    ...allEntities
  }

  const server = new GraphQLServer({
    schema,
    context: req => ({ ...context, user: req.user })
  })

  const authMiddleware = initJwt({
    secret: "somesuperdupersecret"
  })

  server.express
    .disable("x-powered-by")
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .use(authMiddleware)
    .get(/[^graphql]$/, (req, res) => {
      ssrRenderer({ schema, req, res })
        .then(content => {
          res.status(200)
          res.send(content)
          res.end()
        })
        .catch(e => {
          console.error("RENDERING ERROR:", e) // eslint-disable-line no-console
          res.status(500)
          res.end(
            `An error occurred while server rendering with the following stack trace:\n\n${
              e.stack
            }`
          )
        })
    })

  return server
}

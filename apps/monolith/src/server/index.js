import express from "express"
import { GraphQLServer } from "graphql-yoga"
import { mergeSchemas } from "graphql-tools"

import schemas from "./typeDefs"
import resolvers from "./resolvers"
import ssrRenderer from "./lib/ssrRenderer"

const schema = mergeSchemas({
  schemas,
  resolvers
})

const server = new GraphQLServer({
  schema
})

server.express
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get(/[^graphql]$/, (req, res) => {
    ssrRenderer(schema)
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

export default server

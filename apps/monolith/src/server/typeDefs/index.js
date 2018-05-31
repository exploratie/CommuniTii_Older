import { makeExecutableSchema } from "graphql-tools"

import testTypeDefs from "./test.typedefs.graphql"

export default [testTypeDefs].map(typeDefs =>
  makeExecutableSchema({
    typeDefs
  })
)

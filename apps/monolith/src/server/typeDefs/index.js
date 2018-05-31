import { makeExecutableSchema } from "graphql-tools"

import testTypeDefs from "./test.typedefs.graphql"
import userTypeDefs from "./user.typedefs.graphql"

export default [testTypeDefs, userTypeDefs].map(typeDefs =>
  makeExecutableSchema({
    typeDefs
  })
)

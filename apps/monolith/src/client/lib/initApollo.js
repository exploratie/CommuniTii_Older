import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"

export default () => {
  const client = new ApolloClient({
    url: "http://localhost:3000/graphql",
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
  })

  return client
}

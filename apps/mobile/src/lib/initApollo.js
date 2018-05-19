import ApolloClient from "apollo-boost"

export default () => {
  const url = "http://localhost:3000/graphql"
  const client = new ApolloClient({ url })

  return client
}

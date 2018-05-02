import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const query = gql`
  #graphql
  {
    hello
  }
`

const TestContainer = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return <h1>{data.hello}</h1>
    }}
  </Query>
)

export default TestContainer

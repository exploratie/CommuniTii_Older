import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Text } from "react-native-paper"

const query = gql`
  #graphql
  {
    hello
  }
`

const TestContainer = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error :({console.log(error)}</Text>

      return <h1>{data.hello}</h1>
    }}
  </Query>
)

export default TestContainer

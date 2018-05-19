import React from "react"
import { Provider as PaperProvider } from "react-native-paper"
import { ApolloProvider } from "react-apollo"

import createClient from "lib/initApollo"
import Screens from "screens"

const client = createClient()

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider>
          <Screens />
        </PaperProvider>
      </ApolloProvider>
    )
  }
}

export default App

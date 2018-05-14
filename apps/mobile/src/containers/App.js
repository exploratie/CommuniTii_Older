import React from "react"
import { Provider as PaperProvider } from "react-native-paper"

import Screens from "screens"

class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Screens />
      </PaperProvider>
    )
  }
}

export default App

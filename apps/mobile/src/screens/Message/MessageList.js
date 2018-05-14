import React from "react"
import { Title } from "react-native-paper"

class MessageListScreen extends React.PureComponent {
  static navigationOptions = {
    title: "Quest"
  }

  render() {
    return <Title>Hello from Messaging</Title>
  }
}

export default MessageListScreen

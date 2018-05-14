import React from "react"
import { Title } from "react-native-paper"

class UserProfileScreen extends React.PureComponent {
  static navigationOptions = {
    title: "Profile"
  }

  render() {
    return <Title>Profile Screen</Title>
  }
}

export default UserProfileScreen

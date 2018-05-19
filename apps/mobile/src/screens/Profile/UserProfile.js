import React from "react"
import { Title } from "react-native-paper"
import { View } from "react-native"
import TestContainer from "containers/TestContainer"

class UserProfileScreen extends React.PureComponent {
  static navigationOptions = {
    title: "Profile"
  }

  render() {
    return (
      <View>
        <Title>Profile Screen</Title>
        <TestContainer />
      </View>
    )
  }
}

export default UserProfileScreen

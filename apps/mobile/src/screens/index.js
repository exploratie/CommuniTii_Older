import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import QuestScreen from "./Quest"
import ProfileScreen from "./Profile"
import MessageScreen from "./Message"

import TabBarIcon from "components/TabBarIcon"

const setTabBarIcon = (name, props) => TabBarIcon({ name, ...props })

export default createMaterialBottomTabNavigator(
  {
    Quest: {
      screen: QuestScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: props => setTabBarIcon("search", props)
      })
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: props => setTabBarIcon("message", props)
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: props => setTabBarIcon("person", props)
      })
    }
  },
  { initialRouteName: "Quest" }
)

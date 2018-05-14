import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import QuestScreen from "./Quest"
import ProfileScreen from "./Profile"

export default createMaterialBottomTabNavigator(
  {
    Quest: { screen: QuestScreen },
    Profile: { screen: ProfileScreen }
  },
  { initialRouteName: "Quest" }
)

import { createStackNavigator } from "react-navigation"
import UserProfileScreen from "./UserProfile"

export default createStackNavigator({
  UserProfile: { screen: UserProfileScreen }
})

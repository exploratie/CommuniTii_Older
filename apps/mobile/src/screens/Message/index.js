import { createStackNavigator } from "react-navigation"
import MessageListScreen from "./MessageList"

export default createStackNavigator({
  MessageList: { screen: MessageListScreen }
})

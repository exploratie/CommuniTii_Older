import React from "react"
import { string } from "prop-types"
import { MaterialIcons } from "@expo/vector-icons"

const TabBarIcon = ({ tintColor, name }) => (
  <MaterialIcons
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={24}
  />
)

TabBarIcon.propTypes = {
  tintColor: string,
  name: string
}

export default TabBarIcon

import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const bottomTabNavigatorStyles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: colorStyles.main,
    height: 60,
    borderTopColor: colorStyles.primaryLight,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default bottomTabNavigatorStyles;

import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const bottomTabNavigatorStyles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: colorStyles.main,
    height: 60,
    borderTopColor: colorStyles.primaryLight,
    paddingTop: 6,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default bottomTabNavigatorStyles;

import { StyleSheet } from "react-native";
import colorStyles from "../theme/colors";

const globalStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: colorStyles.main,
    height: "100%",
  },
  screen: {
    paddingHorizontal: 20,
    justifyContent: "center",
    flex: 1,
    backgroundColor: colorStyles.main,
  },
});

export default globalStyles;

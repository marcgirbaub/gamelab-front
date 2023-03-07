import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const globalStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: colorStyles.main,
    height: "100%",
  },
  screen: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
});

export default globalStyles;

import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const globalStyles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colorStyles.main,
    height: "100%",
  },
});

export default globalStyles;

import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  logoContainer: { flexDirection: "row" },
  logoGame: {
    color: colorStyles.secondary,
    fontSize: 34,
    letterSpacing: 8,
    fontWeight: "bold",
  },
  logoLab: {
    color: colorStyles.accent,
    fontSize: 34,
    letterSpacing: 8,
    fontWeight: "bold",
  },
});

export default headerStyles;

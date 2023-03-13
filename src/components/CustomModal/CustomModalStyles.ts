import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const customModalStyles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colorStyles.cardLight,
    borderRadius: 30,
    position: "relative",
  },
  closeIcon: {
    color: colorStyles.secondary,
  },
  closeButton: { position: "absolute", top: 16, right: 16 },
  successIcon: {
    color: colorStyles.success,
  },
  errorIcon: { color: colorStyles.error },
  infoSuccess: {
    color: colorStyles.success,
    fontSize: 30,
    letterSpacing: 1,
    textAlign: "center",
  },
  infoError: {
    color: colorStyles.error,
    fontSize: 30,
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default customModalStyles;

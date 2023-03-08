import { StyleSheet } from "react-native";
import colorStyles from "../../styles/colorStyles";

const customModalStyles = StyleSheet.create({
  container: {
    flex: 0.5,
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
  closeButton: { position: "absolute", top: 14, right: 14 },
  successIcon: {
    color: colorStyles.success,
  },
  errorIcon: { color: colorStyles.error },
  infoSuccess: {
    color: colorStyles.success,
    fontSize: 30,
    letterSpacing: 1,
  },
  infoError: {
    color: colorStyles.error,
    fontSize: 30,
    letterSpacing: 1,
  },
});

export default customModalStyles;

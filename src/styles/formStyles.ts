import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const formStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 60,
  },
  formContainer: {
    display: "flex",
    gap: 50,
  },
  title: {
    color: colorStyles.secondary,
    fontSize: 36,
    fontWeight: "600",
    letterSpacing: 1,
  },
  input: {
    color: colorStyles.secondary,
    letterSpacing: 1,
    fontSize: 18,
    height: 50,
    borderBottomWidth: 2,
    borderColor: colorStyles.secondary,
    backgroundColor: "transparent",
  },
  label: {
    color: colorStyles.secondary,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 4,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colorStyles.accent,
    borderRadius: 30,
    height: 52,
  },
  buttonText: {
    letterSpacing: 1,
    color: colorStyles.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    letterSpacing: 1,
    color: colorStyles.secondary,
    fontSize: 16,
  },
  buttonLinkContainer: {
    display: "flex",
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  linkContainer: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: colorStyles.accent,
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default formStyles;

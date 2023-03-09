import { StyleSheet } from "react-native";
import colorStyles from "./colorStyles";

const formStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 50,
  },
  formContainer: {
    display: "flex",
    gap: 30,
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
    letterSpacing: 1.5,
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
  disabledButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#6e3134",
    borderRadius: 30,
    height: 52,
  },
  errorMessage: {
    color: colorStyles.error,
    fontSize: 16,
    height: 16,
    marginTop: 10,
  },
});

export default formStyles;

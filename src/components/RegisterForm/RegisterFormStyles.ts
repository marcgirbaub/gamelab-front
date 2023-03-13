import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";
import formStyles from "../../styles/formStyles";

const registerFormStyles = StyleSheet.create({
  container: formStyles.container,
  formContainer: { ...formStyles.formContainer, gap: 10 },
  title: formStyles.title,
  label: formStyles.label,
  input: formStyles.input,
  button: formStyles.button,
  buttonText: formStyles.buttonText,
  buttonLinkContainer: { ...formStyles.buttonLinkContainer, marginTop: 20 },
  linkContainer: formStyles.linkContainer,
  link: formStyles.link,
  info: formStyles.info,
  disabledButton: formStyles.disabledButton,
  errorMessage: formStyles.errorMessage,
  backButton: {
    color: colorStyles.secondary,
    position: "absolute",
    top: -70,
  },
});

export default registerFormStyles;

import { StyleSheet } from "react-native";
import formStyles from "../../styles/formStyles";
import colorStyles from "../../theme/colors";

const createFormStyles = StyleSheet.create({
  container: { ...formStyles.container, gap: 30 },
  title: { ...formStyles.title, marginTop: 4 },
  formContainer: { ...formStyles.formContainer },
  label: { ...formStyles.label },
  input: { ...formStyles.input },
  dropdown: {
    marginVertical: 10,
  },
  dropdownText: {
    color: colorStyles.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  dropdownArrow: { width: 30, height: 30 },
  hoursText: { fontSize: 16, fontWeight: "400" },
  aboutInput: {
    ...formStyles.input,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: { ...formStyles.buttonText },
  button: { ...formStyles.button, marginBottom: 30 },
  checkboxText: {
    fontSize: 18,
    color: colorStyles.secondary,
    textDecorationLine: "none",
    letterSpacing: 1,
  },
  buttonDisabled: { ...formStyles.disabledButton, marginBottom: 20 },
  checkboxInnerIconStyle: { borderRadius: 10 },
  checkboxIconStyle: { borderRadius: 10 },
  imagePicker: {
    backgroundColor: colorStyles.primaryLight,
    paddingHorizontal: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
  },
  imagePickerIcon: { color: colorStyles.secondary },
  imagePickerText: {
    color: colorStyles.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePickerImage: { width: "100%", height: 197, resizeMode: "cover" },
});

export default createFormStyles;

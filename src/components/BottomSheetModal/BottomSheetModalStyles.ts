import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";
import formStyles from "../../styles/formStyles";

const bottomSheetModalStyles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    backgroundColor: colorStyles.cardLight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colorStyles.secondary,
    marginBottom: 10,
  },
  closeButton: { position: "absolute", top: 16, right: 16 },
  closeIcon: {
    color: colorStyles.secondary,
  },
  button: {
    ...formStyles.button,
  },
  buttonText: { ...formStyles.buttonText },
  swipeIndicator: {
    marginTop: 5,
    width: 40,
    height: 5,
    top: 10,
    borderRadius: 10,
    backgroundColor: colorStyles.primaryLight,
    position: "absolute",
  },
});

export default bottomSheetModalStyles;

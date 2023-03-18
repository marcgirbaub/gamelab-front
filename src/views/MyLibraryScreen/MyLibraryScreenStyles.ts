import { StyleSheet } from "react-native";
import formStyles from "../../styles/formStyles";
import colorStyles from "../../theme/colors";

const myLibraryScreenStyles = StyleSheet.create({
  container: { marginBottom: 270 },
  notFoundText: {
    color: colorStyles.secondary,
    alignSelf: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  title: { ...formStyles.title, marginTop: 4 },
});

export default myLibraryScreenStyles;

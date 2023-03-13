import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const exploreScreenStyles = StyleSheet.create({
  container: { marginBottom: 270 },
  notFoundText: {
    color: colorStyles.secondary,
    alignSelf: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default exploreScreenStyles;

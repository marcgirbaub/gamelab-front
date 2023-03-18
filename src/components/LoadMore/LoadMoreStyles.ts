import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const loadMoreStyles = StyleSheet.create({
  container: {
    backgroundColor: colorStyles.primaryLight,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  text: { color: colorStyles.secondary, fontSize: 20, fontWeight: "bold" },
});

export default loadMoreStyles;

import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const filterStyles = StyleSheet.create({
  container: {
    height: 50,
    marginRight: -40,
    marginLeft: -22,
    paddingRight: 20,
    marginBottom: 4,
  },
  filter: { color: colorStyles.secondary, fontSize: 16, fontWeight: "bold" },
  button: {
    backgroundColor: colorStyles.primaryLight,
    borderRadius: 20,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 20,
  },
  selectedButton: {
    backgroundColor: colorStyles.secondary,
    borderRadius: 20,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 20,
  },
  selectedFilter: {
    color: colorStyles.primaryLight,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default filterStyles;

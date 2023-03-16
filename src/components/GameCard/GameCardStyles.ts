import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";
import isTablet from "../../utils/isTablet";

const gameCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colorStyles.cardLight,
    borderRadius: 20,
    width: isTablet ? 350 : "100%",
  },
  infoContainer: {
    padding: 14,
    margin: 0,
    gap: 18,
    backgroundColor: colorStyles.cardLight,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 24,
  },
  name: { color: colorStyles.secondary, fontSize: 28, fontWeight: "bold" },
  imageContainer: { heigth: 200, width: "100%" },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  categories: { flexDirection: "row", gap: 20 },
  platforms: { flexDirection: "row", gap: 14 },
  platform: { color: colorStyles.secondary },
  category: { color: colorStyles.secondary, fontSize: 16, fontWeight: "bold" },
});

export default gameCardStyles;

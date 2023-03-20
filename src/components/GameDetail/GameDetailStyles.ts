import { StyleSheet } from "react-native";
import colorStyles from "../../theme/colors";

const gameDetailStyles = StyleSheet.create({
  safeArea: { marginHorizontal: -20, marginBottom: 20 },
  container: { paddingHorizontal: 20 },
  imageContainer: { width: "100%", height: 300 },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  title: {
    color: colorStyles.secondary,
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 14,
    letterSpacing: 1,
  },
  aboutContainer: { gap: 10 },
  infoContainer: { gap: 30, marginBottom: 20 },
  subInfoContainer: { gap: 10, width: "50%" },
  rowContainer: { flexDirection: "row" },
  infoTitle: {
    color: colorStyles.secondaryLight,
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  info: {
    color: colorStyles.secondary,
    fontSize: 18,
    flexWrap: "wrap",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  aboutInfo: {
    color: colorStyles.secondary,
    fontSize: 18,
    flexWrap: "wrap",
    letterSpacing: 1,
  },
  backButton: {
    color: colorStyles.secondary,
    marginHorizontal: 20,
    marginBottom: 20,
    width: 40,
  },
  backButtonContainer: { width: 60, alignItems: "center" },
  deleteButton: {
    backgroundColor: colorStyles.primaryLight,
    height: 50,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonsContainer: { flexDirection: "row", justifyContent: "center", gap: 30 },
});

export default gameDetailStyles;

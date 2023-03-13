import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const isTablet = windowWidth >= 834;

export default isTablet;

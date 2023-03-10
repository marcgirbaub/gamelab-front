import React from "react";
import { Text, View } from "react-native";
import headerStyles from "./HeaderStyles";

const Header = (): JSX.Element => (
  <View style={headerStyles.headerContainer}>
    <View style={headerStyles.logoContainer}>
      <Text style={headerStyles.logoGame}>game</Text>
      <Text style={headerStyles.logoLab}>lab</Text>
    </View>
  </View>
);

export default Header;

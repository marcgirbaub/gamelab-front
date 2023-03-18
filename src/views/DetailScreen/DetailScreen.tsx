import React from "react";
import { SafeAreaView, View } from "react-native";
import GameDetail from "../../components/GameDetail/GameDetail";
import Header from "../../components/Header/Header";
import detailScreenStyles from "./DetailScreenStyles";

const DetailScreen = (): JSX.Element => (
  <SafeAreaView>
    <Header />
    <View style={detailScreenStyles.container}>
      <GameDetail />
    </View>
  </SafeAreaView>
);

export default DetailScreen;

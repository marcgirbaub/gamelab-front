import React from "react";
import { SafeAreaView, View } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import createScreenStyles from "./CreateScreenStyles";

const CreateScreen = (): JSX.Element => (
  <SafeAreaView>
    <Header />
    <View style={createScreenStyles.container}>
      <CreateForm title="Create a game" />
    </View>
  </SafeAreaView>
);

export default CreateScreen;

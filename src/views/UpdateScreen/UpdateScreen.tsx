import React from "react";
import { SafeAreaView, View } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../redux/hooks";
import updateScreenStyles from "./UpdateScreenStyles";

const CreateScreen = (): JSX.Element => {
  const { selectedGame } = useAppSelector((state) => state.games);

  return (
    <SafeAreaView>
      <Header />
      <View style={updateScreenStyles.container}>
        <CreateForm title="Create a game" selectedGame={selectedGame} />
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

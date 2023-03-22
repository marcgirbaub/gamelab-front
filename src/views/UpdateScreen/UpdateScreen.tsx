import React, { useEffect } from "react";
import { Animated, SafeAreaView, View } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../redux/hooks";
import updateScreenStyles from "./UpdateScreenStyles";

const UpdateScreen = (): JSX.Element => {
  const { selectedGame } = useAppSelector((state) => state.games);

  const translateY = new Animated.Value(700);

  const animation = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, [animation]);

  return (
    <SafeAreaView>
      <Header />
      <Animated.View
        style={{ ...updateScreenStyles.container, transform: [{ translateY }] }}
      >
        <CreateForm title="Modify your game" selectedGame={selectedGame} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default UpdateScreen;

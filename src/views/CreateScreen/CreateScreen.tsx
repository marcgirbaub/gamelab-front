import React, { useEffect } from "react";
import { SafeAreaView, View, Animated } from "react-native";
import CreateForm from "../../components/CreateForm/CreateForm";
import Header from "../../components/Header/Header";
import createScreenStyles from "./CreateScreenStyles";

const CreateScreen = (): JSX.Element => {
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
        style={{ ...createScreenStyles.container, transform: [{ translateY }] }}
        testID="animated-view"
      >
        <CreateForm title="Create a game" />
      </Animated.View>
    </SafeAreaView>
  );
};

export default CreateScreen;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Provider } from "react-redux";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { store } from "./src/store/store";
import colorStyles from "./src/styles/colorStyles";
import globalStyles from "./src/styles/globalStyles";

const App = (): JSX.Element => (
  <Provider store={store}>
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.screen}>
        <LoginForm />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  </Provider>
);

export default App;

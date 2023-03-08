import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import StackNavigator from "./src/navigation/StackNavigator/StackNavigator";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);
export default App;

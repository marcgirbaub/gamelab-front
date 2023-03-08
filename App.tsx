import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import LoginScreen from "./src/screen/LoginScreen/LoginScreen";
import { store } from "./src/store/store";
import globalStyles from "./src/styles/globalStyles";
import CustomModal from "./src/components/CustomModal/CustomModal";
import StackNavigator from "./src/navigation/StackNavigator/StackNavigator";

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);
export default App;

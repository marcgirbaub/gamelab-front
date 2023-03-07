import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import colorStyles from "./src/styles/colorStyles";
import globalStyles from "./src/styles/globalStyles";

const App = (): JSX.Element => (
  <Provider store={store}>
    <SafeAreaView>
      <View style={globalStyles.screen}>
        <Text style={{ color: colorStyles.secondary }}>gamelab</Text>
      </View>
    </SafeAreaView>
  </Provider>
);

export default App;

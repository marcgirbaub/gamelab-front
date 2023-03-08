import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native/";
import routes from "../routes";
import LoginScreen from "../../screen/LoginScreen/LoginScreen";
import { useAppSelector } from "../../store/hooks";
import Loader from "../../components/Loader/Loader";
import CustomModal from "../../components/CustomModal/CustomModal";
import globalStyles from "../../styles/globalStyles";

const StackNavigator = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const Stack = createNativeStackNavigator();

  const { modal, isLoading } = useAppSelector((state) => state.ui);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {isLoading && <Loader />}
      {modal && <CustomModal />}
      <Stack.Navigator initialRouteName={routes.login}>
        <Stack.Screen
          component={LoginScreen}
          name={routes.login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default StackNavigator;

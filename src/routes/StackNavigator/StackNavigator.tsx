import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native/";
import LoginScreen from "../../views/LoginScreen/LoginScreen";
import { useAppSelector } from "../../redux/hooks";
import Loader from "../../components/Loader/Loader";
import CustomModal from "../../components/CustomModal/CustomModal";
import globalStyles from "../../styles/globalStyles";
import Routes from "../routes";
import RegisterScreen from "../../views/RegisterScreen/RegisterScreen";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  const { modal, isLoading } = useAppSelector((state) => state.ui);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {isLoading && <Loader />}
      {modal && <CustomModal />}
      <Stack.Navigator initialRouteName={Routes.login}>
        <Stack.Screen
          component={LoginScreen}
          name={Routes.login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={RegisterScreen}
          name={Routes.register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={BottomTabNavigator}
          name={Routes.home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default StackNavigator;

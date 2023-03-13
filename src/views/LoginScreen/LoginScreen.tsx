import React from "react";
import { View } from "react-native/";
import BottomSheetModal from "../../components/BottomSheetModal/BottomSheetModal";
import LoginForm from "../../components/LoginForm/LoginForm";
import globalStyles from "../../styles/globalStyles";

const LoginScreen = (): JSX.Element => (
  <View style={globalStyles.screen}>
    <LoginForm />
  </View>
);

export default LoginScreen;

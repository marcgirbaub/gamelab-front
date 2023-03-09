import React from "react";
import { View } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import globalStyles from "../../styles/globalStyles";

const RegisterScreen = (): JSX.Element => (
  <View style={globalStyles.screen}>
    <RegisterForm />
  </View>
);

export default RegisterScreen;

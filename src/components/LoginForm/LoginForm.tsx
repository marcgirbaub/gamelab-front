import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import loginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={loginFormStyles.container}>
        <Text style={loginFormStyles.title}>Log in</Text>
        <View style={loginFormStyles.formContainer}>
          <View>
            <Text style={loginFormStyles.label}>Username</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={loginFormStyles.input}
            />
          </View>
          <View>
            <Text style={loginFormStyles.label}>Password</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              style={loginFormStyles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={loginFormStyles.button}>
          <Text style={loginFormStyles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

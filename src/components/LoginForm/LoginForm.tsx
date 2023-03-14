import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { type UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import loginFormStyles from "./LoginFormStyles";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../routes/routes";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const handleFieldChange = (introducedValue: string, field: string) => {
    setUserCredentials({ ...userCredentials, [field]: introducedValue });
  };

  const onSubmitHandler = async () => {
    const userToLogin: UserCredentials = {
      username: userCredentials.username,
      password: userCredentials.password,
    };

    await loginUser(userToLogin);

    setUserCredentials({ ...initialUserCredentials });
  };

  const isButtonDisabled =
    userCredentials.username === "" || userCredentials.password === "";

  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView behavior="padding">
        <View style={loginFormStyles.container}>
          <Text style={loginFormStyles.title} testID="Log in">
            Log in
          </Text>
          <View style={loginFormStyles.formContainer}>
            <View>
              <Text style={loginFormStyles.label}>Username</Text>
              <TextInput
                autoCapitalize="none"
                accessibilityLabel="enter username"
                autoCorrect={false}
                style={loginFormStyles.input}
                maxLength={20}
                value={userCredentials.username}
                onChangeText={(inputValue) => {
                  handleFieldChange(inputValue, "username");
                }}
              />
            </View>
            <View>
              <Text style={loginFormStyles.label}>Password</Text>
              <TextInput
                autoCapitalize="none"
                accessibilityLabel="enter password"
                autoCorrect={false}
                secureTextEntry={true}
                style={loginFormStyles.input}
                textContentType="password"
                maxLength={20}
                value={userCredentials.password}
                onChangeText={(inputValue) => {
                  handleFieldChange(inputValue, "password");
                }}
              />
            </View>
          </View>
          <View style={loginFormStyles.buttonLinkContainer}>
            <TouchableOpacity
              activeOpacity={0.4}
              disabled={isButtonDisabled}
              style={
                isButtonDisabled
                  ? loginFormStyles.disabledButton
                  : loginFormStyles.button
              }
              onPress={onSubmitHandler}
              accessibilityLabel="press to log in"
              accessibilityRole="button"
            >
              <Text style={loginFormStyles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={loginFormStyles.linkContainer}>
              <Text style={loginFormStyles.info}>Not a member?</Text>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  navigation.navigate(Routes.register);
                }}
              >
                <Text style={loginFormStyles.link}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

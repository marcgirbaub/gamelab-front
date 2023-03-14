import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { type UserRegisterCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import formStyles from "../../styles/formStyles";
import registerFormStyles from "./RegisterFormStyles";
import { type RegisterScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../routes/routes";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const initialUserCredentials: UserRegisterCredentials = {
    username: "",
    password: "",
    email: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFieldChange = (introducedValue: string, field: string) => {
    setUserCredentials({ ...userCredentials, [field]: introducedValue });

    if (userCredentials.email.includes("@")) {
      setEmailError("");
    }
  };

  const onSubmitHandler = async () => {
    setPasswordError("");

    if (!userCredentials.email.includes("@")) {
      setEmailError("Invalid email");

      return;
    }

    if (userCredentials.password.length < 8) {
      setPasswordError("The password must have at least 8 characters");

      return;
    }

    const userToRegister: UserRegisterCredentials = {
      username: userCredentials.username,
      password: userCredentials.password,
      email: userCredentials.email,
    };

    await registerUser(userToRegister);

    setUserCredentials({ ...initialUserCredentials });
  };

  const isButtonDisabled =
    userCredentials.username === "" ||
    userCredentials.password === "" ||
    userCredentials.email === "";

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.login);
        }}
        accessibilityLabel="go back"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={34}
          style={registerFormStyles.backButton}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <KeyboardAvoidingView behavior="padding">
          <View style={registerFormStyles.container}>
            <Text style={registerFormStyles.title} testID="Sign up">
              Sign up
            </Text>
            <View style={registerFormStyles.formContainer}>
              <View>
                <Text style={registerFormStyles.label}>Username</Text>
                <TextInput
                  autoCapitalize="none"
                  accessibilityLabel="enter username"
                  autoCorrect={false}
                  style={registerFormStyles.input}
                  maxLength={30}
                  value={userCredentials.username}
                  onChangeText={(inputValue) => {
                    handleFieldChange(inputValue, "username");
                  }}
                />
                <Text style={formStyles.errorMessage}></Text>
              </View>
              <View>
                <Text style={registerFormStyles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  accessibilityLabel="enter email"
                  autoCorrect={false}
                  style={registerFormStyles.input}
                  maxLength={30}
                  value={userCredentials.email}
                  onChangeText={(inputValue) => {
                    handleFieldChange(inputValue, "email");
                  }}
                />
                <Text style={formStyles.errorMessage}>{emailError}</Text>
              </View>
              <View>
                <Text style={registerFormStyles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  accessibilityLabel="enter password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  style={registerFormStyles.input}
                  textContentType="password"
                  maxLength={20}
                  value={userCredentials.password}
                  onChangeText={(inputValue) => {
                    handleFieldChange(inputValue, "password");
                  }}
                />
                <Text style={formStyles.errorMessage}>{passwordError}</Text>
              </View>
            </View>
          </View>
          <View style={registerFormStyles.buttonLinkContainer}>
            <TouchableOpacity
              accessibilityLabel="press to complete the registration"
              activeOpacity={0.4}
              disabled={isButtonDisabled}
              style={
                isButtonDisabled
                  ? registerFormStyles.disabledButton
                  : registerFormStyles.button
              }
              onPress={onSubmitHandler}
              accessibilityRole="button"
            >
              <Text style={registerFormStyles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <View style={registerFormStyles.linkContainer}>
              <Text style={registerFormStyles.info}>Already a member?</Text>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  navigation.navigate(Routes.login);
                }}
              >
                <Text style={registerFormStyles.link}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegisterForm;

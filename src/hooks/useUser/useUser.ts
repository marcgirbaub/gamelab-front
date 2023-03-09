import axios from "axios";
import decodeToken from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { REACT_APP_URL_API } from "@env";
import { useAppDispatch } from "../../store/hooks";
import {
  type UserRegisterCredentials,
  type CustomTokenPayload,
  type LoginResponse,
  type UserCredentials,
} from "./types";
import { type User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import {
  activateModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import Routes from "../../navigation/routes";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";

const urlRoutes = {
  users: "users/",
  login: "login/",
  register: "register/",
};

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (registerCredentials: UserRegisterCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await axios.post<LoginResponse>(
        `${REACT_APP_URL_API}${urlRoutes.users}${urlRoutes.login}`,
        userCredentials
      );

      const { token } = response.data;
      const { id, username }: CustomTokenPayload = decodeToken(token);

      const userToLogin: User = {
        id,
        token,
        username,
      };

      dispatch(loginUserActionCreator(userToLogin));
      dispatch(unsetIsLoadingActionCreator());

      await AsyncStorage.setItem("token", token);

      navigation.navigate(Routes.welcome);
    } catch {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "Wrong credentials",
        })
      );
    }
  };

  const registerUser = async (registerCredentials: UserRegisterCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());

      await axios.post(
        `${REACT_APP_URL_API}${urlRoutes.users}${urlRoutes.register}`,
        registerCredentials
      );

      dispatch(unsetIsLoadingActionCreator());

      navigation.navigate(Routes.login);
    } catch {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "Something went wrong, please try again",
        })
      );
    }
  };

  return { loginUser, registerUser };
};

export default useUser;

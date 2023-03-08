import axios from "axios";
import decodeToken from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_URL_API } from "@env";
import { useAppDispatch } from "../../store/hooks";
import {
  type CustomTokenPayload,
  type LoginResponse,
  type UserCredentials,
} from "./types";
import { type User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

const routes = {
  users: "users/",
  login: "login/",
};

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await axios.post<LoginResponse>(
        `${REACT_APP_URL_API}${routes.users}${routes.login}`,
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

      await AsyncStorage.setItem("token", token);
    } catch (error: unknown) {}
  };

  return { loginUser };
};

export default useUser;
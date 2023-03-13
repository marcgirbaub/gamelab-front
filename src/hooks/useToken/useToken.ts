import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";

interface UseTokenStructure {
  getToken: () => Promise<void>;
  removeToken: () => Promise<void>;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);

      dispatch(loginUserActionCreator(user));
    }
  }, [dispatch]);

  const removeToken = async () => {
    await AsyncStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;

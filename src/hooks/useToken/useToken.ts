import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "../../utils/decodeToken";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
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

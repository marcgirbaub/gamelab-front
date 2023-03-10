import { renderHook } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Wrapper from "../../mocks/Wrapper";
import useToken from "./useToken";
import { store } from "../../store/store";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import {
  mockToken,
  mockTokenPayload,
  mockUserToLogin,
} from "../../mocks/userMocks";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("jwt-decode", () => () => mockTokenPayload);

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given the useToken custom hook", () => {
  describe("When the getToken function is called", () => {
    test("Then the getItem of AsyncStorage should be called with `token`", async () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      AsyncStorage.getItem = jest.fn().mockReturnValue(mockToken);

      await getToken();

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("token");
    });

    test("Then the dispatch should be called with the action to log in the user", async () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      AsyncStorage.getItem = jest.fn().mockReturnValue(mockToken);

      await getToken();

      expect(spyDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockUserToLogin)
      );
    });
  });

  describe("When the removeToken function is called", () => {
    test("Then the removeItem of AsyncStorage should be called with `token`", async () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      AsyncStorage.removeItem = jest.fn().mockReturnValue(mockToken);

      await removeToken();

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("token");
    });
  });
});

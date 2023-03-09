import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../mocks/Wrapper";
import { activateModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { type User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { store } from "../../store/store";
import {
  type UserRegisterCredentials,
  type CustomTokenPayload,
  type UserCredentials,
} from "./types";
import useUser from "./useUser";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

jest.mock("jwt-decode", () => jest.fn());

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

const mockUserCredentials: UserCredentials = {
  username: "marc10",
  password: "marc12345",
};

const mockToken = "asdjfh3425kjlhsafkdh3k2h32";

const mockTokenPayload: CustomTokenPayload = {
  id: "34523463456",
  username: "marc10",
};

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called with a user with username `marc10` and password `marc12345`", () => {
    test("Then the dispatch should be called with the action to log in the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUserToLogin: User = {
        id: mockTokenPayload.id,
        username: mockUserCredentials.username,
        token: mockToken,
      };

      await loginUser(mockUserCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockUserToLogin)
      );
    });
  });

  describe("When the registerUser function is called with a user with username `marc10`, email `marc@example.com` and password `marc12345`", () => {
    test("Then the dispatch should be called with the action show a modal which indicates that the user has been successfully created", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });
      const expectedModal = {
        isError: false,
        modal: "Your user has been created",
      };

      const mockUserToRegister: UserRegisterCredentials = {
        username: mockUserCredentials.username,
        password: mockUserCredentials.password,
        email: "marc@example.com",
      };

      await registerUser(mockUserToRegister);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(expectedModal)
      );
    });
  });
});

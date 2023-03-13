import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  mockToken,
  mockTokenPayload,
  mockUserCredentials,
  mockUserToRegister,
} from "../../mocks/userMocks";
import Wrapper from "../../mocks/Wrapper";
import { type ModalPayload } from "../../redux/features/ui/types";
import { activateModalActionCreator } from "../../redux/features/ui/uiSlice";
import { type User } from "../../redux/features/user/types";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { store } from "../../redux/store";
import useUser from "./useUser";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

jest.mock("jwt-decode", () => jest.fn());

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

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

  describe("When the loginUser function is called and the request to login the user is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then the dispatch should be call with the action to show a modal with the tex`Wrong credentials`", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "Wrong credentials",
      };

      await loginUser(mockUserCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
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

      await registerUser(mockUserToRegister);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(expectedModal)
      );
    });
  });

  describe("When the registerUser function is called and the request to login the user is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then the dispatch should be call with the action to show a modal with the tex`Wrong credentials`", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "Something went wrong, please try again",
      };

      await registerUser(mockUserToRegister);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });
});

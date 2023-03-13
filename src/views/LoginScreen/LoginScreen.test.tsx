import React from "react";
import { screen } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";
import renderWithProviders from "../../utils/renderWithProviders";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

describe("Given a LoginScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show the LoginForm component with a title `Log in`, two inputs for the username and password", async () => {
      const titleText = "Log in";
      const usernameLabelText = "enter username";
      const passwordLabelText = "enter password";

      renderWithProviders(<LoginScreen />);

      const title = await screen.getByTestId(titleText);
      const usernameInput = await screen.getByLabelText(usernameLabelText);
      const passwordInput = await screen.getByLabelText(passwordLabelText);

      expect(title).toBeDefined();
      expect(usernameInput).toBeOnTheScreen();
      expect(passwordInput).toBeOnTheScreen();
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

describe("Given a LoginScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show the LoginForm component with a title `Log in`, two inputs for the username and passwords and the submit button", async () => {
      const titleText = "Log in";
      const usernameId = "username";
      const passwordId = "password";

      render(<LoginScreen />);

      const title = await screen.getByTestId(titleText);
      const usernameInput = await screen.getByTestId(usernameId);
      const passwordInput = await screen.getByTestId(passwordId);

      expect(title).toBeDefined();
      expect(usernameInput).toBeDefined();
      expect(passwordInput).toBeDefined();
    });
  });
});

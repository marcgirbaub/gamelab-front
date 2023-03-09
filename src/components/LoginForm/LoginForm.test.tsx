import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { screen } from "@testing-library/react-native";
import LoginForm from "./LoginForm";
import { type UserCredentials } from "../../hooks/useUser/types";
import renderWithProviders from "../../testUtils/renderWithProviders";

const mockedLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

const mockUserCredentials: UserCredentials = {
  username: "marc10",
  password: "marc12345",
};

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a `Log in` title", async () => {
      const titleText = "Log in";

      renderWithProviders(<LoginForm />);

      const title = await screen.getByTestId(titleText);

      expect(title).toBeDefined();
    });

    test("Then it shpuld show two inputs corresponding to username and password fields", async () => {
      const usernameId = "username";
      const passwordId = "password";

      renderWithProviders(<LoginForm />);

      const usernameInput = await screen.getByTestId(usernameId);
      const passwordInput = await screen.getByTestId(passwordId);

      expect(usernameInput).toBeDefined();
      expect(passwordInput).toBeDefined();
    });
  });

  describe("When rendered and the user enters their credentials `marc10` and `marc12345`and clicks on the submit button", () => {
    test("Then the credentials should show on the inputs and the loginUser function should be called", async () => {
      const usernameId = "username";
      const passwordId = "password";
      const buttonId = "buttonSubmit";

      renderWithProviders(<LoginForm />);

      const usernameInput = await screen.getByTestId(usernameId);
      const passwordInput = await screen.getByTestId(passwordId);
      const submitButton = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUserCredentials.username);
      fireEvent.changeText(passwordInput, mockUserCredentials.password);

      expect(usernameInput.props.value).toBe(mockUserCredentials.username);
      expect(passwordInput.props.value).toBe(mockUserCredentials.password);

      fireEvent.press(submitButton);

      expect(mockedLoginUser).toHaveBeenCalledWith(mockUserCredentials);
    });
  });
});

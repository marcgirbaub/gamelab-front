import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { render, screen } from "@testing-library/react-native";
import LoginForm from "./LoginForm";
import { type UserCredentials } from "../../hooks/useUser/types";

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

      render(<LoginForm />);

      const title = await screen.getByTestId(titleText);

      expect(title).toBeDefined();
    });

    test("Then it shpuld show two inputs corresponding to username and password fields", async () => {
      const usernameId = "username";
      const passwordId = "password";

      render(<LoginForm />);

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

      render(<LoginForm />);

      const usernameInput = await screen.getByTestId(usernameId);
      const passwordInput = await screen.getByTestId(passwordId);
      const submitButton = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUserCredentials.username);
      fireEvent.changeText(passwordInput, mockUserCredentials.password);
      fireEvent.press(submitButton);

      expect(usernameInput.props.value).toBe(mockUserCredentials.username);
      expect(passwordInput.props.value).toBe(mockUserCredentials.password);

      expect(mockedLoginUser).toHaveBeenCalledWith(mockUserCredentials);
    });
  });
});

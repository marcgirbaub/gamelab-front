import React from "react";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";
import RegisterScreen from "./RegisterScreen";

const mockedRegisterUser = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockedRegisterUser,
}));

describe("Given a RegisterScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show the Register component with three inputs for the username, password and email and a button to submit the register", async () => {
      const usernameAccessibilityLabel = "enter username";
      const passwordAccessibilityLabel = "enter password";
      const emailAccessibilityLabel = "enter email";
      const submitButtonAccessibilityLabel =
        "press to complete the registration";

      renderWithProviders(<RegisterScreen />);

      const usernameInput = await screen.getByLabelText(
        usernameAccessibilityLabel
      );
      const passwordInput = await screen.getByLabelText(
        passwordAccessibilityLabel
      );
      const emailInput = await screen.getByLabelText(emailAccessibilityLabel);
      const submitButton = await screen.getByLabelText(
        submitButtonAccessibilityLabel
      );

      expect(usernameInput).toBeDefined();
      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(submitButton).toBeDefined();
    });
  });
});

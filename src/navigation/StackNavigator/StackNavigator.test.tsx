import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import StackNavigator from "./StackNavigator";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

describe("Given a StackNavigator component", () => {
  describe("When rendered", () => {
    test("Then it should show a login form with two inputs and a button to submit de form", async () => {
      const usernameLabelText = "Username";
      const passwordLabetlText = "Password";
      const accesibleButtonText = "submit button";

      renderWithProviders(<StackNavigator />);

      const userNameLabel = await screen.getByText(usernameLabelText);
      const passwordLabel = await screen.getByText(passwordLabetlText);
      const button = await screen.getByAccessibilityValue({
        text: accesibleButtonText,
      });

      screen.debug();

      expect(userNameLabel).toBeDefined();
      expect(passwordLabel).toBeDefined();
      expect(button).toBeDefined();
    });
  });
});

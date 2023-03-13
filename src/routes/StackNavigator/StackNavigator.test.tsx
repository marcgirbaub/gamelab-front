import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import StackNavigator from "./StackNavigator";
import { mockUiState } from "../../mocks/uiMocks";
import CustomModal from "../../components/CustomModal/CustomModal";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

describe("Given a StackNavigator component", () => {
  describe("When rendered", () => {
    test("Then it should show a login form with two inputs and a button to submit de form", async () => {
      const usernameLabelText = "enter username";
      const passwordLabelText = "enter password";
      const buttonText = "press to log in";

      renderWithProviders(<StackNavigator />);

      const usernameInput = await screen.getByLabelText(usernameLabelText);
      const passwordInput = await screen.getByLabelText(passwordLabelText);
      const button = await screen.getByLabelText(buttonText);

      expect(usernameInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(button).toBeOnTheScreen();
    });
  });

  describe("When rendered and the content is loading", () => {
    test("Then it should show the Loader component", async () => {
      const loaderAccessibilityName = "loading";

      renderWithProviders(<StackNavigator />, { ui: mockUiState });

      const loader = await screen.getByLabelText(loaderAccessibilityName);

      expect(loader).toBeOnTheScreen();
    });
  });

  describe("When rendered and there is a modal with the text `There is a problem`", () => {
    test("Then it should show the CustomModal component", async () => {
      const expectedErrorMessage = "There was a problem";

      renderWithProviders(<CustomModal />, { ui: mockUiState });

      const modalText = await screen.getByText(expectedErrorMessage);

      expect(modalText).toBeOnTheScreen();
    });
  });
});

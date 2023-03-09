import React from "react";
import { screen } from "@testing-library/react-native";
import renderWithProviders from "../../testUtils/renderWithProviders";
import CustomModal from "./CustomModal";
import { mockUiState } from "../../mocks/uiMocks";

describe("Given a CustomModal component", () => {
  describe("When rendered with the message `There was a problem`", () => {
    test("Then it should show a text with this message", () => {
      const expectedErrorMessage = "There was a problem";

      renderWithProviders(<CustomModal />, { ui: mockUiState });

      const modalText = screen.getByText(expectedErrorMessage);

      expect(modalText).toBeDefined();
    });
  });
});

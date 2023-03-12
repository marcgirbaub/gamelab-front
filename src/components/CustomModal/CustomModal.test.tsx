import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import renderWithProviders from "../../utils/renderWithProviders";
import CustomModal from "./CustomModal";
import { mockUiState, mockUiStore } from "../../mocks/uiMocks";
import { Provider } from "react-redux";

const dispatch = jest.spyOn(mockUiStore, "dispatch");

describe("Given a CustomModal component", () => {
  describe("When rendered with the message `There was a problem`", () => {
    test("Then it should show a text with this message", async () => {
      const expectedErrorMessage = "There was a problem";

      renderWithProviders(<CustomModal />, { ui: mockUiState });

      const modalText = await screen.getByText(expectedErrorMessage);

      expect(modalText).toBeDefined();
    });
  });

  describe("When rendered and the user presses the button to close the modal", () => {
    test("Then the dispatch should be called with the action to close the modal", async () => {
      const closeButtonRole = "button";

      render(
        <Provider store={mockUiStore}>
          <CustomModal />
        </Provider>
      );

      const closeButton = await screen.getByRole(closeButtonRole);

      fireEvent.press(closeButton);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

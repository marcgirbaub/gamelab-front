import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import LoadMore from "./LoadMore";
import { mockUiState, mockUiStore } from "../../mocks/uiMocks";
import { Provider } from "react-redux";
import { nextPageActionCreator } from "../../redux/features/ui/uiSlice";

const dispatch = jest.spyOn(mockUiStore, "dispatch");

describe("Given a LoadMore component", () => {
  describe("When it it rendered", () => {
    test("Then it should show a button with `Load More` text", () => {
      const buttonText = "Load more";

      renderWithProviders(<LoadMore />, { ui: mockUiState });

      const loadMoreButton = screen.getByText(buttonText);

      expect(loadMoreButton).toBeOnTheScreen();
    });
  });

  describe("When the user click on the button to load more", () => {
    test("Then the dispatch should be called with the action to go to the next page", () => {
      const accessibilityLabel = "loadmore";

      render(
        <Provider store={mockUiStore}>
          <LoadMore />
        </Provider>
      );

      const loadMoreButton = screen.getByLabelText(accessibilityLabel);
      fireEvent.press(loadMoreButton);

      expect(dispatch).toHaveBeenCalledWith(nextPageActionCreator());
    });
  });
});

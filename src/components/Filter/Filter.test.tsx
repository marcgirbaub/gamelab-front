import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { gamesMockState } from "../../mocks/gamesMocks";
import { mockUiState } from "../../mocks/uiMocks";
import { addFilterActionCreator } from "../../redux/features/ui/uiSlice";
import { store } from "../../redux/store";
import renderWithProviders from "../../utils/renderWithProviders";
import ExploreScreen from "../../views/ExploreScreen/ExploreScreen";
import Filter from "./Filter";

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a Filter component", () => {
  describe("When rendered", () => {
    test("Then it should show a filter text for `Arcade`, `Adventure` and `Shooter`", () => {
      const arcadeFilterText = "Arcade";
      const adventureFilterText = "Adventure";
      const shooterFilterText = "Shooter";

      renderWithProviders(<Filter />);

      const arcadeFilter = screen.getByText(arcadeFilterText);
      const adventureFilter = screen.getByText(adventureFilterText);
      const shooterFilter = screen.getByText(shooterFilterText);

      expect(adventureFilter).toBeOnTheScreen();
      expect(arcadeFilter).toBeOnTheScreen();
      expect(shooterFilter).toBeOnTheScreen();
    });
  });

  describe("When rendered and the user presses on the Strategy filter and there is a game with name League of Legends that matches this category", () => {
    test("Then it should show this card's games", () => {
      const strategyFilterButtonLabel = "Strategy";
      const leagueGameName = "League of Legends";

      renderWithProviders(<ExploreScreen />, { games: gamesMockState });

      const strategyFilterButton = screen.getByLabelText(
        strategyFilterButtonLabel
      );

      fireEvent.press(strategyFilterButton);

      const leagueGame = screen.getByText(leagueGameName);

      expect(leagueGame).toBeOnTheScreen();
    });
  });

  describe("When rendered and the user presses on the `Strategy` filter and the filter is already set to `Strategy`", () => {
    test("Then it should show the `The Witcher` games, which is not an Strategy game", () => {
      const strategyFilterButtonLabel = "Strategy";
      const withcerGameName = "The Witcher";

      renderWithProviders(<ExploreScreen />, {
        games: gamesMockState,
        ui: mockUiState,
      });

      const strategyFilterButton = screen.getByLabelText(
        strategyFilterButtonLabel
      );
      fireEvent.press(strategyFilterButton);

      const withcerGame = screen.getByText(withcerGameName);

      expect(withcerGame).toBeOnTheScreen();
    });
  });
});

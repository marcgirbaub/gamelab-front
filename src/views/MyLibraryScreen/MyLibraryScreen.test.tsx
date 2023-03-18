import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import MyLibraryScreen from "./MyLibraryScreen";
import {
  mockWitcherGame,
  mockLeagueGame,
  gamesMockState,
  privateGamesMock,
} from "../../mocks/gamesMocks";

describe("Given a MyLibraryScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text `My Library`", () => {
      const titleText = "My Library";

      renderWithProviders(<MyLibraryScreen />);

      const title = screen.getByText(titleText);

      expect(title).toBeOnTheScreen();
    });
  });

  describe("When rendered and there are 2 private games in the state", () => {
    test("Then it should show the cards of these games with their names", () => {
      const witcherGameName = mockWitcherGame.name;
      const leagueGameName = mockLeagueGame.name;

      renderWithProviders(<MyLibraryScreen />, {
        games: { ...gamesMockState, createdByUserGames: [...privateGamesMock] },
      });

      const witcherGame = screen.getByText(witcherGameName);
      const leagueGame = screen.getByText(leagueGameName);

      expect(witcherGame).toBeOnTheScreen();
      expect(leagueGame).toBeOnTheScreen();
    });
  });
});

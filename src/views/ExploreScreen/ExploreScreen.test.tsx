import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import { gamesMockState } from "../../mocks/gamesMocks";
import ExploreScreen from "./ExploreScreen";
import { screen } from "@testing-library/react-native";

describe("Given a ExploreScreen component", () => {
  describe("When rendered", () => {
    test("Then it should show the game that are in the state", () => {
      const witcherGameName = "The Witcher";
      const leagueGameName = "League of Legends";

      renderWithProviders(<ExploreScreen />, { games: gamesMockState });

      const witcherGame = screen.getByText(witcherGameName);
      const leagueGame = screen.getByText(leagueGameName);

      expect(witcherGame).toBeOnTheScreen();
      expect(leagueGame).toBeOnTheScreen();
    });
  });
});

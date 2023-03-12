import { render, screen } from "@testing-library/react-native";
import React from "react";
import { mockListOfGames } from "../../mocks/gamesMocks";
import GamesList from "./GamesList";
import { store } from "../../store/store";
import renderWithProviders from "../../utils/renderWithProviders";

beforeEach(() => jest.clearAllMocks());

describe("Given a GamesList component", () => {
  describe("When rendered with a list of two games", () => {
    test("Then it should show the two cards of the games with its names", async () => {
      const witcherGameName = "The Witcher";
      const leagueGameName = "League of Legends";

      renderWithProviders(<GamesList games={mockListOfGames} />, { store });

      const witcherCardTitle = screen.getByText(witcherGameName);
      const leagueCardTitle = screen.getByText(leagueGameName);

      expect(witcherCardTitle).toBeOnTheScreen();
      expect(leagueCardTitle).toBeOnTheScreen();
    });
  });
});

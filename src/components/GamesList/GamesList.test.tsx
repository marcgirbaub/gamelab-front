import { screen } from "@testing-library/react-native";
import React from "react";
import { mockListOfGames } from "../../mocks/gamesMocks";
import GamesList from "./GamesList";
import renderWithProviders from "../../utils/renderWithProviders";

beforeEach(() => jest.clearAllMocks());

jest.mock("react-native/Libraries/Utilities/Dimensions", () => ({
  ...jest.requireActual("react-native/Libraries/Utilities/Dimensions"),
  get: jest.fn().mockReturnValue({ width: 1000, height: 1000 }),
}));

describe("Given a GamesList component", () => {
  describe("When rendered in tablet with a list of two games", () => {
    test("Then it should show the two cards of the games with its names", async () => {
      const witcherGameName = "The Witcher";
      const leagueGameName = "League of Legends";

      renderWithProviders(<GamesList games={mockListOfGames} />);

      const witcherCardTitle = screen.getByText(witcherGameName);
      const leagueCardTitle = screen.getByText(leagueGameName);

      expect(witcherCardTitle).toBeOnTheScreen();
      expect(leagueCardTitle).toBeOnTheScreen();
    });
  });
});

import { screen } from "@testing-library/react-native";
import React from "react";
import { gamesMockState } from "../../mocks/gamesMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import DetailScreen from "./DetailScreen";

describe("Given a DetailScreen component", () => {
  describe("When rendered with the League of Legends game", () => {
    test("Then it should show a title with `League of Legends`, an image with this accessibility label and the Strategy category", () => {
      const gameName = "League of Legends";
      const gameCategory = "Strategy";

      renderWithProviders(<DetailScreen />, { games: gamesMockState });

      const title = screen.getByText(gameName);
      const image = screen.getByLabelText(gameName);
      const categoryText = screen.getByText(gameCategory);

      expect(title).toBeOnTheScreen();
      expect(image).toBeOnTheScreen();
      expect(categoryText).toBeOnTheScreen();
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react-native";
import GameCard from "./GameCard";
import { mockEmptyPlatformGame, mockWitcherGame } from "../../mocks/gamesMocks";
import { type GameStrucutre } from "../../redux/features/games/types";
import renderWithProviders from "../../utils/renderWithProviders";

describe("Given a GameCard component", () => {
  describe("When rendered with the game `The Witcher`", () => {
    test("Then it should show the title `The Witcher` and the categories `Action`, `Adventure`, and its image", () => {
      renderWithProviders(<GameCard game={mockWitcherGame} />);

      const expectedName = screen.getByText(mockWitcherGame.name);
      const expectedActionCategory = screen.getByText(
        mockWitcherGame.categories[0]
      );
      const expectedAdventureCategory = screen.getByText(
        mockWitcherGame.categories[1]
      );
      const expectedImage = screen.getByLabelText(mockWitcherGame.name);

      expect(expectedName).toBeOnTheScreen();
      expect(expectedActionCategory).toBeOnTheScreen();
      expect(expectedAdventureCategory).toBeOnTheScreen();
      expect(expectedImage).toBeOnTheScreen();
    });
  });

  describe("When rendered with the game `Valorant` without any platform", () => {
    test("Then it should show an icon with the label `platform icon`", () => {
      const mockGameWithoutExistingPlatform: GameStrucutre =
        mockEmptyPlatformGame;

      renderWithProviders(<GameCard game={mockGameWithoutExistingPlatform} />);

      const expectedIcon = screen.getByLabelText("platform icon");

      expect(expectedIcon).toBeOnTheScreen();
    });
  });
});

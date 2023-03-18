import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import GameCard from "./GameCard";
import { mockEmptyPlatformGame, mockWitcherGame } from "../../mocks/gamesMocks";
import { type GameStrucutre } from "../../redux/features/games/types";
import renderWithProviders from "../../utils/renderWithProviders";
import { mockUserState } from "../../mocks/userMocks";

beforeEach(() => jest.clearAllMocks());

const mockDeleteGame = jest.fn();
const mockGetOneGame = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  deleteGame: mockDeleteGame,
  getOneGame: mockGetOneGame,
}));

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

  describe("When rendered with the game `Valorant` and the user that created the game presses on the delete button", () => {
    test("Then it deleteGame function should be called with the game's id", () => {
      const deleteButtonAccessibilityLabel = "delete";

      renderWithProviders(<GameCard game={mockWitcherGame} />, {
        user: mockUserState,
      });

      const deleteButton = screen.getByLabelText(
        deleteButtonAccessibilityLabel
      );

      fireEvent.press(deleteButton);

      expect(mockDeleteGame).toHaveBeenCalledWith(mockWitcherGame.id);
    });
  });

  describe("When the user presses on the card", () => {
    test("Then the getOneGame function should be called", async () => {
      const detailButtonLabel = "go to detail";

      renderWithProviders(<GameCard game={mockWitcherGame} />);

      const detailButton = screen.getByLabelText(detailButtonLabel);

      fireEvent.press(detailButton);

      expect(mockGetOneGame).toHaveBeenCalledWith(mockWitcherGame.id);
    });
  });
});

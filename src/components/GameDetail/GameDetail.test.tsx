import { screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import { gamesMockState } from "../../mocks/gamesMocks";
import { mockUserState } from "../../mocks/userMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import GameDetail from "./GameDetail";

const mockGoBackNavigation = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({ goBack: mockGoBackNavigation }),
}));

const mockDeleteGame = jest.fn();

jest.mock("../../hooks/useGames/useGames", () => () => ({
  deleteGame: mockDeleteGame,
}));

describe("Given a GameDetail component", () => {
  describe("When rendered with the League of Legends game in the state", () => {
    test("Then it should show a title with `League of Legends`, an image with this accessibility label and the Strategy category", () => {
      const gameName = "League of Legends";
      const gameCategory = "Strategy";

      renderWithProviders(<GameDetail />, { games: gamesMockState });

      const title = screen.getByText(gameName);
      const image = screen.getByLabelText(gameName);
      const categoryText = screen.getByText(gameCategory);

      expect(title).toBeOnTheScreen();
      expect(image).toBeOnTheScreen();
      expect(categoryText).toBeOnTheScreen();
    });
  });

  describe("When the user presses on the back button", () => {
    test("Then it should call the navigate to go back", () => {
      const backButtonLabel = "go back";

      renderWithProviders(<GameDetail />, { games: gamesMockState });

      const backButton = screen.getByLabelText(backButtonLabel);

      fireEvent.press(backButton);

      expect(mockGoBackNavigation).toHaveBeenCalled();
    });
  });

  describe("When the user presses on the delete game", () => {
    test("Then it should call the deleteGame funtion in order to delete this game", () => {
      const deleteButtonLabel = "delete";

      renderWithProviders(<GameDetail />, {
        games: gamesMockState,
        user: mockUserState,
      });

      const deleteButton = screen.getByLabelText(deleteButtonLabel);

      fireEvent.press(deleteButton);

      expect(mockDeleteGame).toHaveBeenCalledWith(
        gamesMockState.selectedGame.id
      );
    });
  });
});

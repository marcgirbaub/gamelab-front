import { getAllByAltText } from "@testing-library/react";
import {
  gamesMockState,
  initialGamesStateMock,
  mockListOfGames,
  mockValorantGame,
  mockWitcherGame,
} from "../../../mocks/gamesMocks";
import {
  deleteGameActionCreator,
  gamesReducer,
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
  loadOneGameActionCreator,
} from "./gamesSlice";
import { type GamesState } from "./types";

describe("Given a gamesReducer reducer", () => {
  describe("When it receives the action to load two games", () => {
    test("Then it should return a new state with a list of games with these two games in it", () => {
      const expectedNewState: GamesState = {
        ...initialGamesStateMock,
        games: mockListOfGames,
      };

      const loadGamesAction = loadAllGamesActionCreator(mockListOfGames);
      const newState = gamesReducer(initialGamesStateMock, loadGamesAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives the action to load one more game", () => {
    test("Then it should return a new state with previous list of games and the two additional games", () => {
      const expectedNewState: GamesState = {
        ...initialGamesStateMock,
        games: [...initialGamesStateMock.games, mockValorantGame],
      };

      const loadMoreAction = loadMoreGamesActionCreator([mockValorantGame]);
      const newState = gamesReducer(initialGamesStateMock, loadMoreAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives the action to load one game", () => {
    test("Then it should return a new state with the selectedGame property equal to the game loaded", () => {
      const expectedNewState: GamesState = {
        ...initialGamesStateMock,
        selectedGame: { ...mockValorantGame },
      };

      const loadOneGameAction = loadOneGameActionCreator(mockValorantGame);
      const newState = gamesReducer(initialGamesStateMock, loadOneGameAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives the action to delete one game", () => {
    test("Then it should return a new state with the games property without the deleted game", () => {
      const expectedNewState: GamesState = {
        ...gamesMockState,
        games: gamesMockState.games.filter(
          (game) => game.id !== mockWitcherGame.id
        ),
      };

      const deleteGameAction = deleteGameActionCreator(mockWitcherGame.id!);
      const newState = gamesReducer(gamesMockState, deleteGameAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

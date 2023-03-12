import { getAllByAltText } from "@testing-library/react";
import {
  initialGamesStateMock,
  mockListOfGames,
  mockValorantGame,
} from "../../../mocks/gamesMocks";
import {
  gamesReducer,
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
} from "./gamesSlice";

describe("Given a gamesReducer reducer", () => {
  describe("When it receives the action to load two games", () => {
    test("Then it should return a new state with a list of games with these two games in it", () => {
      const expectedNewState = {
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
      const expectedNewState = {
        ...initialGamesStateMock,
        games: [...initialGamesStateMock.games, mockValorantGame],
      };

      const loadMoreAction = loadMoreGamesActionCreator([mockValorantGame]);
      const newState = gamesReducer(initialGamesStateMock, loadMoreAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

import { mockListOfGames } from "../../../mocks/gamesMocks";
import { gamesReducer, loadAllGamesActionCreator } from "./gamesSlice";
import { type GamesState } from "./types";

const initialGamesState: GamesState = {
  games: [],
  selectedGame: {
    about: "",
    ageRating: "",
    backupImage: "",
    categories: [],
    developer: "",
    gameplayTime: 0,
    id: "",
    name: "",
    platforms: [],
    releaseYear: 0,
  },
};

describe("Given a gamesReducer reducer", () => {
  describe("When it receives the action to load two games", () => {
    test("Then it should return a new state with a list of games with these two games in it", () => {
      const loadGamesAction = loadAllGamesActionCreator(mockListOfGames);
      const newState = gamesReducer(initialGamesState, loadGamesAction);

      const expectedNewState = { ...initialGamesState, games: mockListOfGames };

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

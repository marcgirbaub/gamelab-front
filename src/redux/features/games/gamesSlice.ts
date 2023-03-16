import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  type GamesState,
  type GamesStructure,
  type GameStrucutre,
} from "./types";

const initialGamesState: GamesState = {
  games: [],
  selectedGame: {
    about: "",
    ageRating: "",
    image: "",
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

const gamesSlice = createSlice({
  name: "games",
  initialState: initialGamesState,
  reducers: {
    loadAllGames: (
      currentGamesState,
      action: PayloadAction<GamesStructure>
    ): GamesState => ({ ...currentGamesState, games: [...action.payload] }),
    loadMoreGames: (
      currentGamesState: GamesState,
      action: PayloadAction<GamesStructure>
    ): GamesState => ({
      ...currentGamesState,
      games: [...currentGamesState.games, ...action.payload],
    }),
    loadOneGame: (
      currenGameState: GamesState,
      action: PayloadAction<GameStrucutre>
    ): GamesState => ({ ...currenGameState, selectedGame: action.payload }),
    deleteGame: (
      currentGameState,
      action: PayloadAction<string>
    ): GamesState => ({
      ...currentGameState,
      games: currentGameState.games.filter(
        (game) => game.id !== action.payload
      ),
    }),
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadAllGames: loadAllGamesActionCreator,
  loadMoreGames: loadMoreGamesActionCreator,
  loadOneGame: loadOneGameActionCreator,
  deleteGame: deleteGameActionCreator,
} = gamesSlice.actions;

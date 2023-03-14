import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type GamesState, type Games, type Game } from "./types";

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
      action: PayloadAction<Games>
    ): GamesState => ({ ...currentGamesState, games: [...action.payload] }),
    loadMoreGames: (
      currentGamesState: GamesState,
      action: PayloadAction<Games>
    ): GamesState => ({
      ...currentGamesState,
      games: [...currentGamesState.games, ...action.payload],
    }),
    loadOneGame: (
      currenGameState: GamesState,
      action: PayloadAction<Game>
    ): GamesState => ({ ...currenGameState, selectedGame: action.payload }),
  },
});

export const gamesReducer = gamesSlice.reducer;
export const {
  loadAllGames: loadAllGamesActionCreator,
  loadMoreGames: loadMoreGamesActionCreator,
  loadOneGame: loadOneGameActionCreator,
} = gamesSlice.actions;

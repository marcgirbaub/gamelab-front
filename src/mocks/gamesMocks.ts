import { type Game, type Games } from "../store/features/gamesSlice/types";

export const mockWitcherGame: Game = {
  id: "123dsfds123",
  name: "The Witcher",
  about: "This is an adventure game",
  ageRating: "17 +",
  backupImage: "thewitcher.jpg",
  categories: ["Adventure", "Action"],
  developer: "EA games",
  gameplayTime: 60,
  platforms: ["Playstation"],
  releaseYear: 2015,
};

export const mockLeagueGame: Game = {
  id: "123123",
  name: "League of Legends",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["Adventure", "Action"],
  developer: "Riot",
  gameplayTime: 100,
  platforms: ["Windows"],
  releaseYear: 2010,
};

export const mockListOfGames: Games = [mockWitcherGame, mockLeagueGame];

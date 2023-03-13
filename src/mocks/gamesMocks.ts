import {
  type GamesState,
  type Game,
  type Games,
} from "../redux/features/games/types";

export const initialGamesStateMock: GamesState = {
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

export const mockWitcherGame: Game = {
  id: "123dsfds123",
  name: "The Witcher",
  about: "This is an adventure game",
  ageRating: "17 +",
  backupImage: "thewitcher.jpg",
  categories: ["Adventure", "Action"],
  developer: "EA games",
  gameplayTime: 60,
  platforms: ["Playstation", "Apple", "Xbox", "Windows", "Nintendo"],
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

export const mockValorantGame: Game = {
  id: "1231sdfsadf23",
  name: "Valorant",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["RPG", "Action"],
  developer: "Riot",
  gameplayTime: 200,
  platforms: ["Windows"],
  releaseYear: 2017,
};

export const mockEmptyPlatformGame: Game = {
  id: "1231sdfsadf23",
  name: "Valorant",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["RPG", "Action"],
  developer: "Riot",
  gameplayTime: 200,
  platforms: ["Nintedo64"],
  releaseYear: 2017,
};

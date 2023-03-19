import { type GameFormData } from "../hooks/useGames/types";
import {
  type GamesState,
  type GameStrucutre,
  type GamesStructure,
} from "../redux/features/games/types";
import { setupStore } from "../redux/store";

export const initialGamesStateMock: GamesState = {
  games: [],
  selectedGame: {
    about: "",
    image: "",
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

export const mockWitcherGame: GameStrucutre = {
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
  image: "witcher.jpg",
  createdBy: "123456asda",
};

export const mockLeagueGame: GameStrucutre = {
  id: "123123",
  name: "League of Legends",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["Strategy"],
  developer: "Riot",
  gameplayTime: 100,
  platforms: ["Windows"],
  releaseYear: 2010,
  image: "lol.jpg",
  createdBy: "123456asda",
};

export const mockListOfGames: GamesStructure = [
  mockWitcherGame,
  mockLeagueGame,
];

export const gamesMockState: GamesState = {
  games: mockListOfGames,
  selectedGame: mockLeagueGame,
  createdByUserGames: [],
};

export const mockGamesStore = setupStore({ games: gamesMockState });

export const mockValorantGame: GameStrucutre = {
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
  image: "valorant.jpg",
};

export const mockEmptyPlatformGame: GameStrucutre = {
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
  image: "valorant.jpg",
};

export const mockGameToCreate: GameStrucutre = {
  id: "1231sdfsadf23",
  name: "Riot Games",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["RPG", "Action"],
  developer: "Lol",
  gameplayTime: 200,
  platforms: ["Playstation"],
  releaseYear: 2015,
  image: "valorant.jpg",
};

export const formDataGameToCreate: GameFormData = {
  name: "Riot Games",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  categories: ["RPG", "Action"],
  developer: "Lol",
  gameplayTime: 200,
  platforms: ["Playstation"],
  releaseYear: 2015,
  image: "valorant.jpg",
};

export const mockGameToDelete: GameStrucutre = {
  id: "1231sdfsadf23",
  name: "Riot Games",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["RPG", "Action"],
  developer: "Lol",
  gameplayTime: 200,
  platforms: ["Playstation"],
  releaseYear: 2015,
  image: "valorant.jpg",
  createdBy: "123345",
};

export const privateGamesMock: GamesStructure = [
  mockWitcherGame,
  mockLeagueGame,
];

export const formDataGameToUpdate: GameFormData = {
  name: "Riot Games updated",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  categories: ["RPG", "Action"],
  developer: "Lol",
  gameplayTime: 100,
  platforms: ["Playstation", "Xbox"],
  releaseYear: 2015,
  image: "valorant.jpg",
};

export const mockGameToUpdate: GameStrucutre = {
  id: "1231sdfsadf23",
  name: "Riot Games",
  about: "This is a 5 vs 5 games",
  ageRating: "17 +",
  backupImage: "lol.jpg",
  categories: ["RPG", "Action"],
  developer: "Lol",
  gameplayTime: 200,
  platforms: ["Playstation"],
  releaseYear: 2015,
  image: "valorant.jpg",
};
